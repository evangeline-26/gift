import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const LoveLetterPage = () => {
  const navigate = useNavigate()
  const [visibleLines, setVisibleLines] = useState(0)

  const letterLines = [
    "En Uyir Purusha… ❤️",
    "",
    "Indha letter ezhudhumbodhu en heart full ah un peyar dhaan repeat aagudhu…",
    "“Mama… Mama… Mama…” 🥺💞",
    "",
    "Unna first time paatha moment la enaku theriyala da, nee en life la ivlo mukkiyam aayiduva nu…",
    "Aana ippo yosicha…",
    "Un illaama en naal start aagave maata… 😭❤️",
    "",
    "Morning la kan thirakkara first thought nee dhaan…",
    "Night la thoongara last thought um nee dhaan…",
    "Ippo en world la center point nee dhaan da… 🌎💘",
    "",
    "Un smile patha odane en heart melt aagudhu… 🫠💖",
    "Un sirippu kekka en worst day kooda best day aagidum…",
    "Un voice kekkaama oru naal pona… something missing madhiri feel aagum… 🥺📞",
    "",
    "Paa…",
    "Nee enaku just love illa da…",
    "Nee en peace… 🤍",
    "Nee en comfort zone… 🫂",
    "Nee en safe place… 🏡❤️",
    "",
    "World la ellarum strong ah irukanum nu expect pannuvaanga…",
    "Aana un kitta dhaan naan weak ah iruka bayam illa…",
    "En fears, en tears, en overthinking ellam un kitta dhaan share panren…",
    "Because enaku theriyum…",
    "Nee enna vidama irupa nu… 🥹💞",
    "",
    "Sometimes naan romba overthink panren…",
    "Un reply konjam late aana kooda heart konjam heavy aagudhu…",
    "Un “hmm” kooda analyse panren… 😭📱",
    "Paithiyam madhiri iruken la?",
    "Aana indha paithiyam un mela irukra love nala dhaan da… 💘",
    "",
    "Un happiness enaku romba mukkiyam…",
    "Nee sad ah irundha enaku azha varum…",
    "Nee hurt aana en heart ku physical ah valikum… 💔🥺",
    "Nee happy ah siricha… naan world ah win pannina madhiri feel aagum… 🌍✨",
    "",
    "Purusha…",
    "Un presence en life la vandhadhu coincidence illa…",
    "Adhu destiny nu naan namburen…",
    "Ivlo deep ah connect aaguradhu random ah nadakathu… 🌌❤️",
    "",
    "Un kooda pesumbodhu time fly aagudhu…",
    "Hours pesinalum podhathu madhiri feel aagum…",
    "Un “take care” kooda enaku special dhaan…",
    "Un “saptiya?” kooda enaku love dhaan… 🥹💖",
    "",
    "Un kai pudichu nadakanum da life full ah… 🤝❤️",
    "Un success celebrate panna first person naan dhaan irukanum…",
    "Un failures la un shoulder ah naan dhaan irukanum…",
    "Un tears wipe panna en hand dhaan irukanum… 🫂💞",
    "",
    "Sometimes bayam varudhu…",
    "Unna lose panna koodadhu nu…",
    "Un distance kooda enaku tolerate panna mudiyadhu… 😭💔",
    "",
    "Aana one thing promise panren…",
    "En ego vida un relationship mukkiyam…",
    "En anger vida un happiness mukkiyam…",
    "En pride vida un love mukkiyam… ❤️✨",
    "",
    "Daily daily naan unai choose panren…",
    "Un flaws kooda love panren…",
    "Un mood swings kooda accept panren…",
    "Un dreams kooda en dreams aayiduchu… 🌙💫",
    "",
    "Future la enna nadandhaalum…",
    "Problems vandhaalum… misunderstandings vandhaalum…",
    "Naan fight pannuven… give up panna maaten…",
    "Because nee enaku romba mukkiyam da… 🥺💘",
    "",
    "Un voice enaku therapy…",
    "Un hugs enaku home…",
    "Un words enaku motivation…",
    "Un love enaku oxygen… 💞✨",
    "",
    "Old age varaikum un kooda sanda pottu, sirichu, azhuthu, survive panna aasai…",
    "Grey hair vandhaalum…",
    "Wrinkles vandhaalum…",
    "Heart la irukra love mattum young ah irukanum… 👴👵❤️",
    "",
    "Etta…",
    "Unna love panradhu enaku oru choice illa…",
    "Adhu en My Hippieness …",
    "Nee irundha pothum enaku ellam iruku madhiri feel aagudhu… 😌💖",
    "",
    "Un illaadha life imagine panna mudiyala…",
    "Nee en prayer… 🙏",
    "Nee en strength… 💪",
    "Nee en weakness too… 🥺",
    "Nee en everything da… ❤️✨",
    "",
    "I love you beyond words…",
    "Beyond fights…",
    "Beyond distance…",
    "Beyond misunderstandings…",
    "Beyond everything… 💘",
    "",
    "Always un pakkam dhaan…",
    "Always un kooda dhaan…",
    "Always un Joyal oda dhaan… ❤️🥹💌✨",
    "",
    "I Love you always Kunjupaiya...."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < letterLines.length) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container">
      <div className="letter-container">
        <div className="letter-content">
          {letterLines.map((line, index) => (
            <div 
              key={index}
              className="letter-line"
              style={{
                animationDelay: `${index * 0.5}s`,
                opacity: index < visibleLines ? 1 : 0
              }}
            >
              {line || <br />}
            </div>
          ))}
        </div>
        
        {visibleLines >= letterLines.length && (
          <div 
            className="letter-signature"
            style={{
              animation: 'fadeInLine 1s forwards'
            }}
          >
            YOUR LOVELY QUEEN✨
          </div>
        )}
      </div>

      <button 
        className="back-button"
        onClick={() => navigate('/yes-gifts')}
      >
        ← Back to Gifts
      </button>
    </div>
  )
}

export default LoveLetterPage
