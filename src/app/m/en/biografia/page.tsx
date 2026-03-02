export default function MobileBiografiaEN() {
  return (
    <div className="m-bio-page">
      {/* ---- Banner ---- */}
      <div className="m-pres-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/immagini-bio-insieme.jpg"
          alt="Biography — Oronzo Mastro"
          className="m-pres-hero-img"
        />
      </div>

      {/* ---- Section title bar ---- */}
      <div className="m-pres-title-bar">
        <h1 className="m-pres-title">BIOGRAPHY</h1>
      </div>

      {/* ---- Timeline ---- */}
      <div className="m-bio-body">
        <div className="m-bio-timeline">

          <div className="m-bio-row">
            <span className="m-bio-year">1949</span>
            <span className="m-bio-desc">born on 30 December in Grottaglie: ORONZO MASTRO.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1967</span>
            <span className="m-bio-desc">graduates as Master of Art in Ceramics at the State Institute of Art in Grottaglie.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1971</span>
            <span className="m-bio-desc">graduates in Sculpture at the Academy of Fine Arts in Florence.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1974</span>
            <span className="m-bio-desc">teaches Plastic Disciplines and Visual Education at the State Institute of Art in Giarre, in &apos;75 at the Art Lyceum of Catania, in &apos;77 at the Art Lyceum of Genoa, in &apos;86 at the Institute of Art of Modena and in &apos;96 at the Art Lyceum of Bologna.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1974</span>
            <span className="m-bio-desc">wins the National Competition for the creation of a Public Artwork, promoted by the Province of Milan.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1975</span>
            <span className="m-bio-desc">participates in the Rome Quadriennale, open to young artists and new trends in figurative arts.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1977</span>
            <span className="m-bio-desc">wins the Competition for the creation of a Public Artwork, promoted by the Superintendency for Environmental and Artistic Heritage of Basilicata.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1979</span>
            <span className="m-bio-desc">begins a plastic research on the great themes of &ldquo;symbolic figuration&rdquo; in sculpture, creating models in bronze or stone to be enlarged and placed in outdoor spaces.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1986</span>
            <span className="m-bio-desc">continuing the research of previous years, creates a cycle of &ldquo;abstract-geometric&rdquo; works to be enlarged in travertine and placed in outdoor spaces.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">1998</span>
            <span className="m-bio-desc">launches a cycle of &ldquo;symbolic-figurative&rdquo; and &ldquo;abstract-geometric&rdquo; works, in cold-worked brass, which represent the sum of an aesthetic research following the tradition and innovation of plastic language.</span>
          </div>

          <div className="m-bio-row">
            <span className="m-bio-year">2004</span>
            <span className="m-bio-desc">writes a &ldquo;Monographic Essay&rdquo; on the knowledge of art and the art of sculpture. Completed in 2014, it is published by Claudio Grenzi Editore in 2023.</span>
          </div>

        </div>
      </div>
    </div>
  )
}
