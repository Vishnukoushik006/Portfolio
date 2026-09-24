import './Background.css';

export default function Background() {
  return (
    <div className="bg-wrapper">
      {/* Subtle spotlight orbs */}
      <div className="bg-spotlight" style={{ left: '20%', top: '30%', animation: 'floatOrb1 6s ease-in-out infinite' }} />
      <div className="bg-spotlight" style={{ left: '70%', top: '60%', animation: 'floatOrb2 7s ease-in-out infinite' }} />
      <div className="bg-spotlight" style={{ left: '45%', top: '80%', animation: 'floatOrb3 8s ease-in-out infinite' }} />
    </div>
  );
}
