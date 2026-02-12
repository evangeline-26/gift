import { useNavigate } from 'react-router-dom'

const AngryLetterPage = () => {
  const navigate = useNavigate()

  const letterData = [
    "Joyal…",
    "",
    "Listen da…",
    "Indha letter cute ah start panna poren nu nenacha… wrong. 😌",
    "",
    "Straight ah sollren…",
    "Nee enaku dhaan. Period. ❤️🔥",
    "",
    "First la naan calm ah irundhen…",
    "“Let’s see where this goes” nu nenachen…",
    "Aana ippo situation change aayiduchu da…",
    "",
    "Mudichu vandhu accept pannu.",
    "Ini ellam no option illa. 😏💍",
    "",
    "Un life la evlo per irundhaalum…",
    "Main character naan dhaan.",
    "Supporting role ku apply panna maaten. 😌🔥",
    "",
    "Un smile ah daily paakanum –",
    "Adhuku right enaku iruku.",
    "Un bad day la first call panna person naan dhaan irukanum –",
    "Adhuku right enaku iruku.",
    "Un future plans la naan irukanum –",
    "Adhuvum right dhaan. ❤️",
    "",
    "Nee tired ah irundha disturb panna right enaku iruku.",
    "Nee silent ah irundha question panna right enaku iruku.",
    "Nee over ah attitude kudutha correct panna right enaku iruku. 😌",
    "",
    "Because love na just “I love you” illa da…",
    "Love na ownership… care… fight… patch up… repeat. 🔥❤️",
    "",
    "Un happiness ah protect panna naan ready.",
    "Un tears varama pathuka naan ready.",
    "Yaaravadhu un heart ah hurt panna…",
    "First ah face panna naan dhaan ready. 😌🔥",
    "",
    "Nee enaku important nu sollradhum illa…",
    "Nee enaku necessary.",
    "",
    "Coffee madhiri illa…",
    "Oxygen madhiri. 💨❤️",
    "",
    "So ippo official ah solren…",
    "Escape route close.",
    "Exit door lock.",
    "Heart la permanent entry. 💘🔒",
    "",
    "Unna love panna naan permission kekka maaten.",
    "Unna care panna naan limit veika maaten.",
    "Un life la iruka naan decision eduthuten.",
    "",
    "And da…",
    "Idhu temporary illa.",
    "Trial version illa.",
    "Lifetime subscription. 😏🔥",
    "",
    "Sanda varum…",
    "Drama varum…",
    "Jealousy varum…",
    "Aana end la naan dhaan irupen.",
    "",
    "Muditu vandhu accept pannu…",
    "Ini ellam no option illa.",
    "Un future la naan iruken.",
    "",
    "Simple. Clear. Final. ❤️🔥",
    "",
    "Unoda official troublemaker,",
    "Love panra owner,",
    "Forever claim pannita one person. 😌💌🔥"
  ];

  return (
    <div className="container">
      <div className="letter-container shake">
        <div className="letter-content" style={{ fontWeight: 600, maxHeight: '60vh', overflowY: 'auto' }}>
          {letterData.map((line, index) => (
             <div key={index} style={{ marginBottom: line === "" ? "1rem" : "0.5rem" }}>
               {line || <br/>}
             </div>
          ))}
        </div>
      </div>

      <button 
        className="btn btn-yes"
        style={{ marginTop: '2rem', fontSize: '1.5rem', padding: '1.5rem 3rem' }}
        onClick={() => navigate('/yes-gifts')}
      >
        👉 Change to YES
      </button>
    </div>
  )
}

export default AngryLetterPage
