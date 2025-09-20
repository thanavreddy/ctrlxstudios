import type { NextApiRequest, NextApiResponse } from 'next';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

// Define the type for the expected request body
type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

// Define the type for the API response
type ResponseData = {
  message: string;
};

/**
 * Handles incoming API requests for the contact form and forwards the data to Formspree.
 * @param req The incoming request object.
 * @param res The outgoing response object.
 */
export async function POST(
  req: NextRequest,
  // res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests for this API route
  const body = await req.json();
  // if (req.method !== 'POST') {
  //   res.setHeader('Allow', ['POST']);
  //   return res.status(405).end(`Method ${req.method} Not Allowed`);
  // }

  const { name, email, company, message }: ContactFormData = body;

  // Use a try-catch block for robust error handling
  try {
    // const { name, email,company, message }: ContactFormData = req.body;

    // Validate incoming data
    if (!name || !email || !message) {

      return new Response(JSON.stringify({
        error: "Missing fields required",
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      }))
    }

    // Load the Formspree endpoint from an environment variable
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    // Check if the environment variable is set
    if (!formspreeEndpoint) {
      console.error("Missing FORMSPREE_ENDPOINT in environment variables.");
      return new Response(JSON.stringify({ message: 'Server configuration error.', status: 500 }));
    }

    // Forward the form data to the Formspree endpoint
    const formResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email, company, message })
    });

    if (formResponse.ok) {
      return new Response(JSON.stringify({ message: 'Contact form submitted successfully!', status: 200 }));
    } else {
      console.error('Formspree submission failed:', formResponse.statusText);
      return new Response(JSON.stringify({ status: formResponse.status, message: 'Form submission failed.' }));
    }

  } catch (error) {
    console.error('Error processing contact form submission:', error);
      return new Response(JSON.stringify({ message: 'Internal Server error.', status: 500 }));

  }
}
