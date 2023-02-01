## useEffect

In the Class-Componet-Solution we need to observe three things things

* First - we can see that to update the document title the same code is repeated, first in componentDidMount that is executed only once when the component is created, and in componentDidUpdate that is executed every time the state of the component change

* Second - the code related to the timer setInterval and clearInterval which are related are put into different code lifecycle methods, part is in componentDidMount and part in componentWillUnmout

* Third - the code to update the Dom and setInterval which are completely unrelated are put together

wouldn't it be nice to not repeat code and at the same time group together only the related code, that's where useEffect hook comes into picture