import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const [primaryInterest, setPrimaryInterest] = useState('');
  const [projectStage, setProjectStage] = useState('');
  const [budget, setBudget] = useState('');
  const [marketingChallenge, setMarketingChallenge] = useState('');
  const [othersSelected, setOthersSelected] = useState(false);
  const [otherText, setOtherText] = useState('');

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // State for website goal question
  const [websiteGoal, setWebsiteGoal] = useState('');
  const [websiteOthersSelected, setWebsiteOthersSelected] = useState(false);
  const [websiteOtherText, setWebsiteOtherText] = useState('');

  const handlePrimaryInterestClick = (interest) => {
    setPrimaryInterest(interest);
    if (interest === 'Web Development' || interest === 'Mobile App Development') {
      setStep(2);
    } else if (interest === 'Website Designing') {
      setStep(6); // Display step 6 for Website Designing
    } else if (interest === 'Digital Marketing') {
      setStep(5);
    }
  };

  const handleProjectStageClick = (stage) => {
    setProjectStage(stage);
    setStep(3);
  };

  const handleBudgetClick = (budget) => {
    setBudget(budget);
    setStep(4);
  };

  const handleMarketingChallengeClick = (challenge) => {
    if (challenge === 'Others') {
      setOthersSelected(true);
    } else {
      setMarketingChallenge(challenge);
      setOthersSelected(false);
      if (primaryInterest === 'Digital Marketing') {
        setStep(3);
      } else {
        setStep(4);
      }
    }
  };

  const handleProceedClick = () => {
    setMarketingChallenge(otherText);
    setStep(4);
  };

  const handleWebsiteGoalClick = (goal) => {
    if (goal === 'Other') {
      setWebsiteOthersSelected(true);
    } else {
      setWebsiteGoal(goal);
      setWebsiteOthersSelected(false);
      setStep(2);// Proceed to the next step
    }
  };

  const handleWebsiteProceedClick = () => {
    setWebsiteGoal(websiteOtherText);
    setWebsiteOthersSelected(false);
    setStep(3); // Proceed to the next step
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const updatedErrors = {
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
    };
  
    if (!/^[a-zA-Z0-9_]+$/.test(formData.fullName)) {
      updatedErrors.fullName = 'Name can only contain letters, numbers, and underscores';
      valid = false;
    }
  
    // Email validation: a simple regex for basic email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      updatedErrors.email = 'Invalid email address';
      valid = false;
    }
  
    if (!/^[0-9-]+$/.test(formData.mobileNumber)) {
      updatedErrors.mobileNumber = 'Invalid phone number';
      valid = false;
    }
  
    setErrors(updatedErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (validateForm()) {
      try {
        let templateParams = {
          from_name: formData.fullName,
          to_name: "LYMData",
          from_email: formData.email,
          to_email: "info@lymdata.com",
          company_name: formData.companyName,
          phone_number: formData.mobileNumber,
        };

        if (step >= 2) {
          templateParams.primary_interest = primaryInterest;
        }
        if (step >= 3) {
          templateParams.project_stage = projectStage;
        }
        if (step >= 4) {
          templateParams.budget = budget;
        }
        if (step >= 5 && primaryInterest === 'Digital Marketing') {
          templateParams.marketing_challenge = marketingChallenge;
        }
        if (step >= 6 && primaryInterest === 'Website Designing') {
          templateParams.website_goal = websiteGoal;
        }

        await emailjs.send(
          "service_w4ox98s",
          "template_95dbo87",
          templateParams,
          "_h7dmU_ZWC9dc_ISz"
        );

        setLoading(false);
        setSuccess(true);
        resetForm(); 
        setTimeout(() => {
          setStep(1); 
        }, 2000);

        console.log("Email sent successfully");
      } catch (error) {
        console.error("Error sending email:", error);
        // Handle error 
      }
    } else {
      setLoading(false);
    }
  };

  const calculateProgress = () => {
    const totalSteps = 6;
    return (step / totalSteps) * 100;
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', boxSizing: 'border-box', textAlign: 'center' }}>
      <div style={progressContainerStyle}>
        <div style={{ ...progressLineStyle, width: `${calculateProgress()}%` }}></div>
      </div>

      {step === 1 && (
        <div>
          <h1 className='text-[25px]'>What's your primary area of interest?</h1>
          <div className='mt-4'>
            <button className=" lg:width-[400px]" style={buttonStyle} onClick={() => handlePrimaryInterestClick('Web Development')}>Web Development</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handlePrimaryInterestClick('Mobile App Development')}>Mobile App Development</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handlePrimaryInterestClick('Website Designing')}>Website Designing</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handlePrimaryInterestClick('Digital Marketing')}>Digital Marketing</button>
          </div>
        </div>
      )}

      {step === 2 && ['Web Development', 'Mobile App Development','Website Designing'].includes(primaryInterest) && (
        <div>
          <h1 className='text-[25px]'>What's the stage of your project?</h1>
          <div className='mt-2'>
            <button style={buttonStyle} onClick={() => handleProjectStageClick('Concept and Need Refining')}>We have a concept and need refining it</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleProjectStageClick('Exploring Options and Need Guidance')}>We are exploring options and need guidance</button>
          </div>
        </div>
      )}

      {step === 3 && ['Web Development', 'Mobile App Development', 'Website Designing', 'Digital Marketing'].includes(primaryInterest) && (
        <div>
          <h1 className='text-[25px]'>Do you have a budget in mind for your project?</h1>
          <div>
            <button style={buttonStyle} onClick={() => handleBudgetClick('No, open to options')}>No, open to options</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleBudgetClick('Below 50000')}>Below 50000</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleBudgetClick('Above 50000')}>Above 50000</button>
          </div>
        </div>
      )}

      {step === 5 && primaryInterest === 'Digital Marketing' && (
        <div>
          <h1 className='text-[25px]'>What's your biggest digital marketing challenge?</h1>
          <div className='mt-2'>
            <button style={buttonStyle} onClick={() => handleMarketingChallengeClick('Increasing Website Traffic')}>I need help increasing website traffic</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleMarketingChallengeClick('Generating Leads Online')}>I'm struggling to generate leads online</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleMarketingChallengeClick('Improving Brand Awareness')}>I want to improve brand awareness</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleMarketingChallengeClick('Not Sure Where to Start')}>I'm not sure where to start with digital marketing</button>
          </div>
          <div>
            {othersSelected ? (
              <div>
                <input
                  style={inputButtonStyle}
                  type="text"
                  placeholder="Please specify"
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                /><br></br>
                <button style={proceedButtonStyle} onClick={handleProceedClick}>Proceed</button>
              </div>
            ) : (
              <button style={buttonStyle} onClick={() => handleMarketingChallengeClick('Others')}>Others (please specify)</button>
            )}
          </div>
        </div>
      )}

      {/* Website designing question */}
      {step === 6 && primaryInterest === 'Website Designing' && (
        <div>
          <h1 className='text-[25px]'>What's the primary goal of your website?</h1>
          <div className='mt-2'>
            <button style={buttonStyle} onClick={() => handleWebsiteGoalClick('Generate leads and sales')}>Generate leads and sales</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleWebsiteGoalClick('Showcase my portfolio or services')}>Showcase my portfolio or services</button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => handleWebsiteGoalClick('E-commerce - Sell products or services online')}>E-commerce - Sell products or services online</button>
          </div>
          <div>
            {websiteOthersSelected ? (
              <div>
                <input
                  style={inputButtonStyle}
                  type="text"
                  placeholder="Please specify"
                  value={websiteOtherText}
                  onChange={(e) => setWebsiteOtherText(e.target.value)}
                /><br></br>
                <button style={proceedButtonStyle} onClick={handleWebsiteProceedClick}>Proceed</button>
              </div>
            ) : (
              <button style={buttonStyle} onClick={() => handleWebsiteGoalClick('Other')}>Other (please specify)</button>
            )}
          </div>
        </div>
      )}

      {step === 4 && (
        <form onSubmit={handleSubmit}>
          <h2 className='text-[40px]'>Contact Us</h2><br></br>
          <div style={fieldContainerStyle}>
            <label htmlFor="fullName">Full Name</label>
            <input
              style={inputStyle}
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
          </div>
          <div style={fieldContainerStyle}>
            <label htmlFor="companyName">Business Name</label>
            <input
              style={inputStyle}
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
             
            />
            {errors.companyName && <p style={{ color: 'red' }}>{errors.companyName}</p>}
          </div>
          <div style={fieldContainerStyle}>
            <label htmlFor="email">Email Address</label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
          <div style={fieldContainerStyle}>
            <label htmlFor="mobileNumber">Phone Number</label>
            <input
              style={inputStyle}
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
            {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
          </div>
          <button style={submitButtonStyle} type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          {success && <p style={{ color: 'green' }}>Your Response has been recorded  Our assistant will get in touch with you soon.</p>}
        </form>
      )}
    </div>
  );
};

const progressContainerStyle = {
  height: '5px',
  width: '100%',
  backgroundColor: '#545352',
  borderRadius: '10px',
  marginBottom: '20px',
  overflow: 'hidden',
};

const progressLineStyle = {
  height: '100%',
  backgroundColor: '#EFC229',
  width: '0%',
  transition: 'width 0.3s ease-in-out',
};

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  width: '100%',
  maxWidth: '600px',
  height: '60px',
  border: '1px solid #b0b0b0',
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '15px',
  cursor: 'pointer',
};

const inputButtonStyle = {
  backgroundColor: 'black',
  color: 'whitek',
  width: '100%',
  maxWidth: '600px',
  height: '60px',
  border: '1px solid #b0b0b0',
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '15px',
  cursor: 'text',
  boxSizing: 'border-box',
  textAlign: 'left',
  paddingLeft: '15px'
};

const proceedButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#3076F9',
  marginTop: '10px',
};

const fieldContainerStyle = {
  marginTop: '15px',
  textAlign: 'left',
  display: 'block',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  color: "white",
};

const inputStyle = {
  padding: '10px',
  margin: '5px 0',
  height: '60px',
  border: '0.5px solid #ccc',
  borderRadius: '20px',
  backgroundColor: 'black',
  width: '100%',
};

const submitButtonStyle = {
  backgroundColor: '#3785D3',
  width: '100%',
  maxWidth: '400px',
  height: '60px',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '10px 0',
  borderRadius: '15px',
  cursor: 'pointer',
};

export default Questionnaire;
