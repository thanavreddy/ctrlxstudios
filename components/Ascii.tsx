'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { AsciiEffect } from 'three/examples/jsm/Addons.js'
import { TrackballControls } from 'three/examples/jsm/Addons.js'

export default function AsciiEffectScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let camera: THREE.PerspectiveCamera,
      controls: TrackballControls,
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer,
      effect: AsciiEffect,
      sphere: THREE.Mesh,
      plane: THREE.Mesh

    const start = Date.now()

    function init() {
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      camera.position.y = 150
      camera.position.z = 500

      scene = new THREE.Scene()
      scene.background = new THREE.Color(0, 0, 0)

      const pointLight1 = new THREE.PointLight(0xffffff, 3)
      pointLight1.position.set(500, 500, 500)
      scene.add(pointLight1)

      const pointLight2 = new THREE.PointLight(0xffffff, 1)
      pointLight2.position.set(-500, -500, -500)
      scene.add(pointLight2)

      sphere = new THREE.Mesh(
        new THREE.SphereGeometry(200, 20, 10),
        new THREE.MeshPhongMaterial({ flatShading: true })
      )
      scene.add(sphere)

      plane = new THREE.Mesh(
        new THREE.PlaneGeometry(400, 400),
        new THREE.MeshBasicMaterial({ color: 0xe0e0e0 })
      )
      plane.position.y = -200
      plane.rotation.x = -Math.PI / 2
      scene.add(plane)

      renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setAnimationLoop(animate)

      effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true })
      effect.setSize(window.innerWidth, window.innerHeight)
      effect.domElement.style.color = 'white'
      effect.domElement.style.backgroundColor = 'black'

      if (containerRef.current) {
        containerRef.current.appendChild(effect.domElement)
      }

      controls = new TrackballControls(camera, effect.domElement)

      window.addEventListener('resize', onWindowResize)
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      effect.setSize(window.innerWidth, window.innerHeight)
    }

    function animate() {
      const timer = Date.now() - start
      sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150
      sphere.rotation.x = timer * 0.0003
      sphere.rotation.z = timer * 0.0002
      controls.update()
      effect.render(scene, camera)
    }

    init()

    return () => {
      window.removeEventListener('resize', onWindowResize)
      effect.domElement.remove()
      controls.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="w-full h-screen relative bg-black text-white overflow-hidden">
      <div className="absolute top-2 left-2 z-10 text-xs">
        <a
          href="https://threejs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          three.js
        </a>{' '}
        - effects - ascii
      </div>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  )
}
