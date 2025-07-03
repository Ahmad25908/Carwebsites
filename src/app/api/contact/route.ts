// import { NextResponse } from 'next/server';
// import { client } from '@/sanity/lib/client';

// export async function POST(request: Request) {
//   try {
//     const { name, email, message } = await request.json();

//     // Create a new document in Sanity
//     await client.create({
//       _type: 'contactMessage',
//       name,
//       email,
//       message,
//     });

//     return NextResponse.json({ success: true, message: 'Message sent successfully!' });
//   } catch (error) {
//     console.error('Sanity Create Error:', error);
//     return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
//   }
// }
