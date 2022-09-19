import React, {useState} from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    if(amount === ""){
      alert('please enter amount');
    }else{
      var options = {
        key:'',
        key_secret:'',
        amount: amount *100,
        currency:'INR',
        name:"AMAN_ACCOUNT",
        description:"for testing purpose",
        handler: function(res){
          alert(res.razorpay_payment_id);
        },
        prefill: {
          name:"AMAN SINGH",
          email:"g1aman.singh2575@gmail.com",
          contact: '9529362741'
        },
        notes:{
          address: "Razorpay Corporate office"
        },
        theme: {
          color: '#3399cc'
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
      <h2>Razorpay Payment Integration using react</h2>
      <br />
      <input type='number' placeholder='Enter Amount' value={amount} 
      onChange={(e) => setAmount(e.target.value)} />
      <br />
      <button onClick={handlesubmit}>submit</button>
      <br />
    </div>
  );
}

export default App;
