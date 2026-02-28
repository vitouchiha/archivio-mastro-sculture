import TextPage from '@/components/TextPage'

export const metadata = {
  title: 'Biografia | Archivio Mastro Sculture',
}

export default function Page() {
  return (
    <TextPage
      banner="/images/immagini-bio-insieme.jpg"
      bannerAlt="Oronzo Mastro – immagini biografiche"
      title="Biografia"
    >
      <div className="bio-timeline">
        {[
          ['1949', 'il 30 dicembre nasce a Grottaglie ORONZO MASTRO.'],
          ['1967', 'si diploma Maestro d\'Arte per la Ceramica, presso l\'Istituto Statale d\'Arte di Grottaglie.'],
          ['1971', 'si diploma in Scultura, presso l\'Accademia di Belle Arti di Firenze.'],
          ['1974', 'insegna Discipline Plastiche ed Educazione Visiva presso l\'Istituto Statale d\'Arte di Giarre, nel \'75 al Liceo Artistico di Catania, nel \'77 al Liceo Artistico di Genova, nel \'86 all\'Istituto d\'Arte di Modena e nel \'96 al Liceo Artistico di Bologna.'],
          ['1974', 'vince il Concorso Nazionale per la realizzazione di un\'Opera Pubblica, indetto dalla Provincia di Milano.'],
          ['1975', 'partecipa alla Quadriennale di Roma, aperta ai giovani artisti e alle nuove tendenze delle arti figurative.'],
          ['1977', 'vince il Concorso per la realizzazione di un\'Opera Pubblica, indetto dalla Soprintendenza per i beni Ambientali e Artistici della Basilicata.'],
          ['1979', 'inizia una ricerca plastica sui grandi temi della "figurazione simbolica" in scultura, realizzando modelli in bronzo o in pietra, da ingrandire e collocare in spazi all\'aperto.'],
          ['1986', 'in continuità con la ricerca degli anni precedenti, realizza un ciclo di opere "astratto-geometriche" da ingrandire in travertino e collocare in spazi all\'aperto.'],
          ['1998', 'avvia un ciclo di opere "simbolico-figurative" e "astratto-geometriche", in ottone lavorato a freddo, che sono la summa di una ricerca estetica, nel solco della tradizione e innovazione del linguaggio plastico.'],
          ['2004', 'scrive un "Saggio monografico" sui saperi dell\'arte e sull\'arte della scultura. Finito di scrivere nel 2014, è pubblicato da Claudio Grenzi Editore nel 2023.'],
        ].map(([year, text]) => (
          <div key={`${year}-${text.slice(0,20)}`} className="bio-entry">
            <span className="bio-year">{year}</span>
            <span className="bio-text">{text}</span>
          </div>
        ))}
      </div>

      <div className="bio-narrative">
        <p>
          Di professione insegnante, scultore per vocazione, Oronzo Mastro nasce il 30 dicembre 1949
          a Grottaglie (TA), centro pugliese rinomato per la produzione di ceramiche artistiche e
          artigianali. Il padre Cosimo, maestro ceramista, lo porta con sé in bottega fin dagli anni
          delle elementari. Qui imparerà ad apprezzare il rigore e la bellezza del lavoro artigianale.
        </p>
        <p>
          Dal 1961 al 1967 frequenta l&apos;Istituto Statale d&apos;Arte per la Ceramica &ldquo;V.
          Calò&rdquo; di Grottaglie, vincendo nel 1964 il primo premio di scultura, in una mostra
          organizzata dalla Lega Missionaria della propria città, con un&apos;opera dal titolo{' '}
          <em>Mal d&apos;Africa</em>.
        </p>
        <p>
          Nel 1967 s&apos;iscrive all&apos;Accademia di Belle Arti di Firenze e lavora, come modellatore
          e decoratore in proprio, per alcune aziende ceramiche di Sesto Fiorentino (FI) sino al 1971,
          anno in cui consegue il diploma di scultura. Il soggiorno fiorentino si rivelerà decisivo per
          la formazione del giovane artista. La convivenza, a suo dire, con le opere dei maestri del
          Rinascimento, i tanti musei e mostre d&apos;arte contemporanea visitati in quegli anni e i
          fermenti della contestazione giovanile del Sessantotto, saranno importanti per le scelte
          culturali e artistiche degli anni a venire.
        </p>
        <p>
          In Accademia, presso la scuola di scultura del Prof. Antonio Berti, perfeziona lo studio della
          figura umana e inizia un lavoro di ricerca su alcuni segni e simboli del linguaggio figurativo
          che sembrano distinguersi per la loro presenza e funzione narrante.
        </p>
        <p>
          Tornato a Grottaglie, apre uno studio attiguo alla bottega paterna dove realizza alcuni rilievi
          in legno dipinto. Con il pannello plastico-pittorico dal titolo <em>Ora zero</em>, nel 1974
          vince il Concorso Nazionale indetto dalla Provincia di Milano per la realizzazione di
          un&apos;opera da destinare alla sala consiliare dell&apos;Istituto Tecnico Industriale del
          Comune di Abbiategrasso (MI).
        </p>
        <p>
          Nel 1974 gli viene conferita la cattedra per l&apos;insegnamento di Modellato ed Educazione
          Artistica presso l&apos;Istituto Statale d&apos;Arte di Giarre (CT). Nello stesso anno realizza
          un trittico dal titolo <em>Ritratti del Potere</em> in tecnica mista, con il quale partecipa
          alla Quadriennale d&apos;Arte di Roma, edizione 1975.
        </p>
        <p>
          Trasferitosi a Genova nel 1977, insegnerà Figura, Ornato Modellato ed Educazione Visiva al
          Liceo Artistico Statale &ldquo;P. Klee&rdquo;. Le problematiche educative e didattiche aprono
          un nuovo fronte di ricerca indirizzato a uno studio dei meccanismi della visione e del
          linguaggio delle immagini.
        </p>
        <p>
          Nel 1986 si stabilisce a Bologna e riprende a occuparsi di scultura realizzando modelli da
          ingrandire in travertino, ancora più geometrici ed essenziali. Nel 1996 ottiene il
          trasferimento di cattedra al Liceo Artistico Statale &ldquo;F. Arcangeli&rdquo; di Bologna.
        </p>
        <p>
          Da questi disegni prenderanno forma le sculture in ottone realizzate tra il 1998 e il 2004.
          La loro architettura, quasi senza corpo, senza peso, sono pensieri ed emozioni diventate
          immagini, segni, simboli. Diventate piccole sculture.
        </p>
        <p>
          A Bologna, dove vive e lavora dal 1986, continua a occuparsi di scultura, portando avanti
          una propria ricerca estetica, libera da ragioni che non siano la sperimentazione e il
          piacere del fare.
        </p>
      </div>
    </TextPage>
  )
}
