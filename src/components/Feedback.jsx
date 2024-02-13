import React from 'react';

const Feedback = () => {
    const customerReviews = [
        {
            id:1,
            name: 'John Doe',
            comment: 'Excellent product! I use it in all my cooking.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Jane Smith',
            comment:'The quality of this oil is unmatched. Highly recommended!',
            rating: 4,
        },
        {
            id: 3,
            name: 'Jane Smith',
            comment:'The quality of this oil is unmatched. Highly recommended!',
            rating: 4,
        },
        {
            id:4,
            name: 'John Doe',
            comment: 'Excellent product! I use it in all my cooking.',
            rating: 5,
        },
        {
            id: 5,
            name: 'Jane Smith',
            comment:'The quality of this oil is unmatched. Highly recommended!',
            rating: 3,
        },
        {
            id:6,
            name: 'John Doe',
            comment: 'Excellent product! I use it in all my cooking.',
            rating: 2,
        },
        {
            id:7,
            name: 'John Doe',
            comment: 'Excellent product! I use it in all my cooking.',
            rating: 2,
        },
    ];

    const reviewsInRows = [];
    for (let i=0; i < customerReviews.length; i +=3) {
        reviewsInRows.push(customerReviews.slice(i, i+3));
    }

    return (
        <div className='feedback-container'>
            <h2 className='feedback-heading'>Customer Reviews</h2>
            {reviewsInRows.map((row, rowIndex) => (
                <div key={rowIndex} className="feedback-row">
                    {row.map((review) => (
                          <div key={review.id} className='feedback-card'>
                          <div className='review-name'>{review.name}</div>
                          <div className='review-comment'>{review.comment}</div>
                          <div className='review-rating'>
                              {Array.from({length : review.rating},(_ , index) => (
                                  <span key={index} className='star-icon'>&#9733;</span>
                              ))}
                          </div>
                      </div>
                          ))}
                          </div>
            ))}
            </div>
    );
};

export default Feedback;