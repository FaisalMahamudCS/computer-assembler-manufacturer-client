import React from 'react';

const Blog = () => {
    return (
        <div className='m-3'>
           <h3>How can we improve performance of React Application?</h3> 
           <p>We can use production build to improve performance.because it minified the react app.
We can use Browserify,Rollup production build to build optimized build.We can use functional component rather than 
class component .Because functional components prevent constructing class Instance and it reduce overall bundle size which is better than class components 
we can also avoid index as key for mapping,but the key alawys show incorrect data .we use key to identify dom element.but because
of index as key it cause performance issue
           </p>
           <h3>Different way to manage state in react application</h3>
           <p>
         Mainly there are four kind of state to manage.Local State,Global State,Server State,URL state.
         we manage local state data in one or other components.Global state is when we have to manage state across
         different different components.when we login we have to change data thoughout the app.So it is a global state.
         Server state is the data which will come from server and we have to integrate our user interface .We have to 
         manage states every time we fetch data,update data in loading state as well as error.For this react has React
       Query Library and SWR library.URL state is used data which is exist in url.we have to rely on accessing url state
            </p>
            <h3>How prototypical inheritance Work</h3>
            <p>Prototypical inheritance is the ability to access object property from another object.By this 
                feature of js we can add new property and method to existing constructor.for example
                Date object inherit from Date.prototype ,Array object inherit from Array.Prototype.Generally
                Object.prototype exist on top of the prototype inheritance chain.other object inherit property from the main object 
                prototype
                 </p>
            <h3> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>

       <p>We donot set state directly.because if we set state directly we will loose control of product states.if we can directly set is as product=
           when we directly update it without setting,when we again call setProducts it will replace the 
           products = [...]  value and because of directly updating state ,it doesn't change.
           </p>
           <h3>Why do we use unit testing?</h3>
           <p>We use unit testing to ensure the quality standard of all code we written.
               it check all the code.unit testing is done before deploying.it help to flew at early
               stage.because if we deployed it without unit testing and give it to producting use.there could be flew and 
               in production it would be hard to find it.
           </p>
        </div>
    );
};

export default Blog;