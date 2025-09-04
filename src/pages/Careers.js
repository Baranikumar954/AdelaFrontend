import React, { useState } from 'react';
import { Header } from '../components/Header';
import api from '../util/AxiosConfig';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleFileChange = (e) => {
  //   setResumeFile(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    // if (resumeFile) {
    //   data.append('resume', resumeFile);
    // }

    try {
      const res = await api.post('/careers', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file upload
        },
      });

      if (res.status === 200 || res.status === 201) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setResumeFile(null);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error.response || error.message);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Careers at Adela Softwares</h1>

        <p className="mb-4 text-gray-700">
          We are always looking for talented individuals to join our team. If you're passionate, driven,
          and want to work on impactful projects, we’d love to hear from you!
        </p>

        <p className="mb-8 text-gray-700">
          Fill out the form below and our HR team will get in touch with you.
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded shadow">
            ✅ Your application has been submitted. We’ll contact you soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded border">

            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Cover Letter / Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* <div>
              <label className="block mb-1 font-medium">Resume (optional)</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full"
              />
            </div> */}

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
