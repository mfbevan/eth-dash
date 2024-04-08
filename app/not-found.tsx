import Image from 'next/image';

import notFoundImg from '../public/404.png';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        gap: '3rem',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <h1 style={{ fontSize: '5rem', color: 'red' }}>Page Not Found</h1>

      <div>
        <Image
          src={notFoundImg}
          alt="404"
          width={150}
          height={150}
          priority={true}
        />
      </div>
      <div>
        <p style={{ fontSize: '1.5rem' }}>
          The page you are looking for does not exist. Please check the URL and
          try again.
        </p>
      </div>
    </div>
  );
}
