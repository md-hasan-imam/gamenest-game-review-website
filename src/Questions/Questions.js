import React from 'react';
import "./Question.css"

const Question = () => {
    return (
        <div className='Question-Container'>
            <div className="question">
                <h2 className='text-2xl p-1' >What is Context API?</h2>
                <p className='ans text-xl px-2 pt-3'> <span className='text-2xl'>Ans:</span> In case of using same values into child component we need to send props and pass it in it's further component. React context api help us to reduce this repeatation. We just need to create a global context with variables and export it. Then we can easily acces it using useContext(). It is the alternative to "prop drilling" or moving props from grandparent to child to parent.</p>
            </div>
            <div className="question">
                <h2 className='text-2xl p-1'>What is semantic tag?</h2>
                <p className='ans text-xl px-2 pt-3'><span className='text-2xl' >Ans:</span>  Semantic tags are meaningful to both the machine and the user. These tags can easily understandable for the human beings. These tags has special meaning. For example: Header, Footer, Article etc.Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            </div>
            <div className="question">
                <h2 className='text-2xl p-1'>What is the difference between inline and inline-block elements? </h2>
                <p className='ans text-xl px-2 pt-3'><span className='text-2xl '>Ans: </span> Inline tags only take its content sapce. But the inline-block tags takes the full line. We can set margin in x-axis in inline element but not in y-axix. On the other hand in block-element we can set margin in both axix. We can change the inline tag into inline-block tag using css and css frameworks. </p>
            </div>

        </div>
    );
};

export default Question;