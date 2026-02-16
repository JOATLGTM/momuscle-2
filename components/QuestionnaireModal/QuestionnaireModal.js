'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './QuestionnaireModal.module.css';

export default function QuestionnaireModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    hasCoach: '',
    workoutDays: '',
    goals: [],
    needsMealPlan: '',
    coachingPreference: '',
    locationPreference: '',
    trainerPreference: '',
    fullName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const modalRef = useRef(null);
  const contentRef = useRef(null);

  const questions = [
    {
      id: 'hasCoach',
      question: 'Have you worked with a coach before?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
    {
      id: 'workoutDays',
      question: 'How many days do you want to workout per week?',
      type: 'radio',
      options: [
        { value: '1', label: '1 day' },
        { value: '2', label: '2 days' },
        { value: '3', label: '3 days' },
        { value: '4', label: '4 days' },
      ],
    },
    {
      id: 'goals',
      question: 'What is your goal?',
      subtext: 'Check all that apply',
      type: 'checkbox',
      options: [
        { value: 'lose-fat', label: 'Lose fat' },
        { value: 'build-muscle', label: 'Build muscle' },
        { value: 'tone-up', label: 'Tone up' },
        { value: 'get-stronger', label: 'Get stronger' },
        { value: 'become-healthier', label: 'Become healthier' },
        { value: 'injury', label: 'Prevent Injury' },
      ],
    },
    {
      id: 'needsMealPlan',
      question: 'Do you need a meal plan?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
    {
      id: 'coachingPreference',
      question: 'Do you prefer in person or online coaching?',
      type: 'radio',
      options: [
        { value: 'in-person', label: 'In person' },
        { value: 'online', label: 'Online' },
      ],
    },
    {
      id: 'locationPreference',
      question: 'Which location do you want to train at?',
      type: 'radio',
      options: [
        { value: 'hilliard', label: 'Hilliard' },
        { value: 'worthington', label: 'Worthington' },
      ],
    },
    {
      id: 'trainerPreference',
      question: 'Who do you want to train with?',
      type: 'radio',
      options: [
        { value: 'mo-nayal', label: 'Mo Nayal' },
        { value: 'brie-miller', label: 'Brie Miller' },
        { value: 'no-preference', label: 'No Preference' },
      ],
    },
  ];

  useEffect(() => {
    if (isOpen && modalRef.current) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = () => {
    if (currentStep < questions.length) {
      gsap.to(contentRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setCurrentStep(currentStep + 1);
          gsap.fromTo(
            contentRef.current,
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3 }
          );
        },
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      gsap.to(contentRef.current, {
        x: 20,
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setCurrentStep(currentStep - 1);
          gsap.fromTo(
            contentRef.current,
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3 }
          );
        },
      });
    }
  };

  const handleChange = (questionId, value) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { fullName: '', email: '', phone: '' };

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required.';
      isValid = false;
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters long.';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
      isValid = false;
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          alert('There was an error submitting the form. Please try again.');
        }
      } catch (error) {
        alert('There was an error submitting the form. Please try again.');
      }
    }
  };

  const handleClose = () => {
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      onComplete: () => {
        onClose();
        setCurrentStep(0);
        setIsSuccess(false);
        setFormData({
          hasCoach: '',
          workoutDays: '',
          goals: [],
          needsMealPlan: '',
          coachingPreference: '',
          locationPreference: '',
          trainerPreference: '',
          fullName: '',
          email: '',
          phone: '',
        });
        setErrors({ fullName: '', email: '', phone: '' });
      },
    });
  };

  const isCurrentQuestionAnswered = () => {
    if (currentStep >= questions.length) return true;
    const currentQuestion = questions[currentStep];
    const currentValue = formData[currentQuestion.id];
    return currentQuestion.type === 'checkbox'
      ? currentValue.length > 0
      : Boolean(currentValue);
  };

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className={styles.overlay} onClick={handleClose}>
      <div
        ref={contentRef}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {isSuccess ? (
          <div className={styles.successContent}>
            <div className={styles.successIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" />
                <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className={styles.successTitle}>Congratulations!</h2>
            <p className={styles.successText}>
              Thank you for signing up. We will contact you shortly to discuss your fitness journey.
            </p>
            <button onClick={handleClose} className={styles.button}>
              Return Home
            </button>
          </div>
        ) : (
          <>
            {currentStep <= questions.length - 1 ? (
              <>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width: `${((currentStep + 1) / (questions.length + 1)) * 100}%`,
                    }}
                  />
                </div>
                <div className={styles.progressText}>
                  Question {currentStep + 1} of {questions.length}
                </div>

                <div className={styles.questionContent}>
                  <h2 className={styles.question}>{questions[currentStep].question}</h2>
                  {questions[currentStep].subtext && (
                    <p className={styles.subtext}>{questions[currentStep].subtext}</p>
                  )}

                  <div className={styles.options}>
                    {questions[currentStep].type === 'radio' &&
                      questions[currentStep].options.map((option) => (
                        <label key={option.value} className={styles.radioOption}>
                          <input
                            type="radio"
                            name={questions[currentStep].id}
                            value={option.value}
                            checked={formData[questions[currentStep].id] === option.value}
                            onChange={(e) =>
                              handleChange(questions[currentStep].id, e.target.value)
                            }
                            className={styles.radioInput}
                          />
                          <span className={styles.radioLabel}>{option.label}</span>
                        </label>
                      ))}

                    {questions[currentStep].type === 'checkbox' &&
                      questions[currentStep].options.map((option) => (
                        <label key={option.value} className={styles.checkboxOption}>
                          <input
                            type="checkbox"
                            checked={formData[questions[currentStep].id].includes(option.value)}
                            onChange={(e) => {
                              const currentValues = formData[questions[currentStep].id];
                              const newValues = e.target.checked
                                ? [...currentValues, option.value]
                                : currentValues.filter((v) => v !== option.value);
                              handleChange(questions[currentStep].id, newValues);
                            }}
                            className={styles.checkboxInput}
                          />
                          <span className={styles.checkboxLabel}>{option.label}</span>
                        </label>
                      ))}
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.contactForm}>
                <h2 className={styles.contactTitle}>Contact Us</h2>
                <p className={styles.contactText}>
                  We are looking forward to helping with your physical training. Please fill in the
                  form so we can contact you.
                </p>

                <div className={styles.formFields}>
                  <div className={styles.fieldWrapper}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className={styles.input}
                    />
                    {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
                  </div>

                  <div className={styles.fieldWrapper}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={styles.input}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>

                  <div className={styles.fieldWrapper}>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={styles.input}
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                  </div>
                </div>
              </div>
            )}

            <div className={styles.navigation}>
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Previous
              </button>

              {currentStep >= questions.length ? (
                <button onClick={handleSubmit} className={styles.button}>
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isCurrentQuestionAnswered()}
                  className={styles.button}
                >
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
