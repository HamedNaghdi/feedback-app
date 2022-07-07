import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true){
      setbtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10){
      const newFeedback = {
        text,//short term => text: text,
        rating
      }
      addFeedback(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
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
