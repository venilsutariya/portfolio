import React from 'react';

const AboutPage = () => {

    return (
        <div className="px-5 lg:px-20">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>

                <p className="mb-8">Welcome to Venil&apos;s Portfolio!</p>

                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray- dark:text-gray-400 mb-8">
                    At Venil's Portfolio, we're on a mission to craft exceptional digital experiences that leave a lasting impact. We're passionate about leveraging cutting-edge technologies and innovative strategies to bring your ideas to life. Our goal is to create solutions that not only meet your needs but exceed your expectations.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <p className="text-gray- dark:text-gray-400 mb-8">
                    We are a team of professional developers specializing in app development and web development. Our developers have extensive experience and expertise in building robust, scalable, and user-friendly applications. With a keen focus on quality and attention to detail, we ensure that every project we undertake is delivered to the highest standards.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <p className="text-gray- dark:text-gray-400 mb-8">
                    At Venil&apos;s Portfolio, we believe in a collaborative approach to every project. We understand that every client is unique, and we take the time to listen to your requirements and goals. By working closely with you throughout the development process, we ensure that our solutions are tailored to your specific needs and deliver maximum value.
                </p>

                <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside mb-8">
                    <li className="text-gray- dark:text-gray-400">Innovative Solutions: We're constantly pushing the boundaries of what's possible, delivering cutting-edge solutions that set you apart from the competition.</li>
                    <li className="text-gray- dark:text-gray-400">Experienced Team: Our team of experienced professionals is dedicated to delivering results that exceed your expectations. With years of experience in the industry, we have the skills and expertise to tackle even the most complex projects.</li>
                    <li className="text-gray- dark:text-gray-400">Client-Centric Approach: Your satisfaction is our top priority. We work closely with you to understand your needs and goals, ensuring that every project is completed to your utmost satisfaction.</li>
                </ul>

                <p className="text-gray- dark:text-gray-400">Have an idea or want to build something amazing? Contact us today to discuss how we can help you achieve your goals!</p>
            </div>
        </div>
    );
}

export default AboutPage;
