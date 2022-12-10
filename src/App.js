import './App.css';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">

      {/* Navbar */}
      <nav className='flex justify-between my-4'>
        <div>
          <h2><span>Tanjil's</span> PortFolio</h2>
        </div>
        <div className='flex gap-8'>
          <a href="https://drive.google.com/file/d/1roDcdkd4gdSJrbLr9Wn-_I4PJ3d6Vc8E/view?usp=share_link">Resume</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact ME</a>
        </div>
      </nav>

      <section className='my-96'>
        <div>
          I'm a front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent website that improves the lives of those around me.
        </div>
      </section>

    </div>
  );
}

export default App;
