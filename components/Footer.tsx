import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 md:absolute md:bottom-0 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="me-4 md:me-6">
            <a href="#" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path d="M6.94 7.632l-.616 3.849-3.444-.894.616-3.849 3.444.894zm1.22-3.849c.758.196 1.516.392 2.274.588-.394 2.453-.788 4.905-1.182 7.358-.758-.196-1.516-.392-2.274-.588.394-2.453.788-4.905 1.182-7.358zM5.742 8.453c-.545-.142-1.09-.285-1.635-.427-.109.683-.218 1.367-.327 2.05.545.142 1.09.285 1.635.427.109-.683.218-1.367.327-2.05z" />
                <path fillRule="evenodd" d="M8 1.5A6.5 6.5 0 1 0 8 14.5a6.5 6.5 0 0 0 0-13zm0 1a5.5 5.5 0 1 1 0 11A5.5 5.5 0 0 1 8 2.5z" />
              </svg>
            </a>
          </li>
          <li className="me-4 md:me-6">
            <a href="#" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path d="M8.051 8.013v6.922H5.634V8.013H4.19V6.172h1.444V4.782c0-1.078.567-2.721 2.731-2.721l2.007.007v2.131h-1.457c-.315 0-.754.148-.754.822v1.161h2.199l-.287 1.841h-1.912z" />
              </svg>
            </a>
          </li>
          <li className="me-4 md:me-6">
            <a href="#" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path d="M11.65 8.707L7.767 12.59a1.752 1.752 0 0 1-2.473 0l-.548-.548a1.752 1.752 0 0 1 0-2.473L8.63 5.686A.597.597 0 0 0 8.202 5H4.594A.594.594 0 0 1 4 4.406V3.594C4 3.265 4.265 3 4.594 3h6.812C11.735 3 12 3.265 12 3.594v6.812c0 .33-.265.594-.594.594h-.812a.594.594 0 0 1-.594-.594V8.707z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm3.635 6.29c.007.157.01.316.01.474 0 4.842-3.681 10.427-10.428 10.427-2.07 0-4.001-.606-5.625-1.647.292.034.59.051.893.051 1.72 0 3.304-.586 4.566-1.573-1.607-.029-2.962-1.095-3.43-2.558.224.043.453.066.69.066.334 0 .66-.045.97-.13C1.218 10.34.38 8.76.38 7.026v-.064c.545.307 1.168.492 1.833.513C.892 6.454.42 5.123.42 3.623c0-.22.024-.435.071-.641C2.222 5.265 4.266 6.511 6.606 6.64c-.077-.867.147-1.732.62-2.42C8.272 2.475 10.25 1.99 12.055 3.145c.611-.122 1.19-.343 1.71-.65-.202.625-.63 1.147-1.188 1.477.546-.066 1.068-.21 1.554-.423-.362.542-.818 1.02-1.344 1.4z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
