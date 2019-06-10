# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a declarative UI library that attempts to solve the problem of
building component based applications that need reactivity. 

1.  What does it mean to _think_ in react?

To me, thinking in React means thinking in components. What pieces of UI, and/or
logic, can be componentized for re-use? It also means thinking about state
ownership, and data flow. And it also means thinking about what you want to
change over time as data changes.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class/Stateful components can 'own' `state`, and have methods to affect that state
over time. They also have life cycle methods (at least Class components do),
that allow you to hook into changes within the component at different points in
the reconciliation/render/re-render cycle. 

Function/Presentational components do not own their
data, instead getting it passed in through the `props` object. If they need to interact
with the data, or change it over time, they need to be passed in functions via
props from the owner of the state.

1.  Describe state.

State is an optional object on an instance of a Class component, that allows 
ownership of data. React provides a method called setState that allows you to
change the state in your own methods, or the lifecycle methods of the Class. The
state object cannot (or should not) be changed directly, instead only using
setState, so that React can know to trigger a reconciliation/re-render phase.

1.  Describe props.

Props are data that a component does not own, but instead are passed into it
from a parent component. Props can not be directly changed. Instead the method
of change for props is to pass a funciton down that will trigger a setState in
the Class component that owns the `state`, causing the data to change throughout the tree and
causing a reconciliation/re-render phase.
