import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    if (text === ''){
      setbtnDisabled(true)
      setMessage(null)
    } else if (text.trim().length <= 10){
      setbtnDisabled(true)
      setMessage('Text most be least 10 characters.')
    }
    else{
      setbtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => {setRating(rating)}}/>
        <div className="input-group">
            <input
              onChange={handleTextChange} 
              type="text" 
              placeholder="write a review" 
              value={text}
            />
            <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
