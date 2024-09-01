import React from 'react';

const ProfileDetail = () => {
  return (
    <div className='max-w-7xl mx-auto bg-white'>
      <div className=" p-8  mx-auto rounded-lg shadow-md">
        {/* Highlights Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#0c2b64]">Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>
              Assistant professor of psychiatry at{' '}
              <a href="#" className="text-blue-600 underline">
                Harvard Medical School
              </a>
            </li>
            <li>
              Attending psychiatrist at{' '}
              <a href="#" className="text-blue-600 underline">
                McLean Hospital
              </a>{' '}
              in Belmont, MA, where he leads a team-based approach to the management and recovery of patients with serious mental illnesses
            </li>
            <li>
              Board-certified in psychiatry by the{' '}
              <a href="#" className="text-blue-600 underline">
                American Board of Psychiatry and Neurology
              </a>
            </li>
          </ul>
        </div>

        {/* Quote Section */}
        <div className="border-l-4 border-green-600 bg-[#e8f5f9] p-4 mb-6 rounded-lg">
          <p className="italic text-gray-700">
            “I am thrilled to be involved with Verywell in their mission to bring accurate and accessible information regarding health issues to
            everyone. This is an especially critical time that the information available to the public in understanding their health is factual,
            clear, and contextually useful.”
          </p>
          <p className="mt-4 font-semibold text-right text-gray-800">— STEVEN GANS, MD</p>
        </div>

        {/* Experience Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#0c2b64]">Experience</h2>
          <p className="text-gray-700 mt-4">
            Dr. Gans is passionately involved in the practice and teaching of psychotherapy. He is an active supervisor, teacher, and mentor in the
            Massachusetts General Hospital (MGH)/McLean Adult Psychiatry Residency Training Program and in their Program in Psychodynamics (PIP). A
            graduate of the{' '}
            <a href="#" className="text-blue-600 underline">
              Boston Psychoanalytic Society and Institute
            </a>
            , he is a supervisor and mentor in their Advanced Psychoanalytic Psychotherapy Training Program.
          </p>
          <p className="text-gray-700 mt-4">
            He serves as a psychotherapist attending to the Pavilion program at McLean Hospital. Dr. Gans was a psychiatric consultant for the{' '}
            <a href="#" className="text-blue-600 underline">
              Laurel Hill Inn eating disorders treatment program
            </a>
            , and served as the Clinical Challenges editor for the{' '}
            <a href="#" className="text-blue-600 underline">
              Harvard Review of Psychiatry
            </a>
            . He has previously been named to{' '}
            <a href="#" className="text-blue-600 underline">
              “Best Doctors”
            </a>{' '}
            by Boston Magazine.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#0c2b64]">Education</h2>
          <p className="text-gray-700 mt-4">
            Dr. Gans received a Bachelor in Science degree from Loyola University of Chicago. He earned his medical degree from Rush University Medical
            College. Dr. Gans did his residency in psychiatry at the Beth Israel Hospital in Boston. He is a graduate of the Boston Psychoanalytic
            Society and Institute.
          </p>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#0c2b64]">About SukoonSphere</h2>
          <p className="text-gray-700 mt-4">
            SukoonShpere, a{' '}
            <a href="#" className="text-blue-600 underline">
              Dotdash Meredith Brand
            </a>
            , is an award-winning, trusted, and compassionate online resource that provides the guidance you need to improve your mental health and find
            balance. We take a human approach to health and wellness content—and reach more than 150 million readers annually.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
