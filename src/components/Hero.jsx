import React from 'react';

import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/ngohuutuan221020", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Tổng hợp bài viết với<br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Đơn giản hóa việc đọc của bạn với Summize, một công cụ tóm tắt bài báo mã nguồn mở giúp chuyển đổi các bài báo dài thành các bản tóm tắt rõ ràng và súc tích
      </h2>
    </header>
  );
};

export default Hero;
