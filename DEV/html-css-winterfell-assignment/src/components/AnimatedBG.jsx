import './animated-bg.css'

export default function AnimatedBG() {
  return (
    <div className='bg-wrap'>
      {/* glow layers */}
      <div className='bg-aurora a1' />
      <div className='bg-aurora a2' />
      <div className='bg-auro
      
      ra a3' />

      {/* moving grid */}
      <div className='bg-grid' />

      {/* subtle noise */}
      <div className='bg-noise' />
    </div>
  );
}
