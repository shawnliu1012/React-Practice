import React from 'react';
import 'App.css';
import Header from 'components/ui/header';
import Footer from 'components/ui/footer';
import Main from 'components/ui/main';

const App: React.FC =(data) =>
{
  return (
    // 使用w-screen實現container-fluid效果
    // https://github.com/tailwindlabs/discuss/issues/41
    <div className='w-screen' >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// const App: React.FC =(data) =>
// {
//   const appStyle = {
//     fontSize: '12px' ,
//     color: '#00ff00',
//   };

//   return (
//     <div style={appStyle} >
//       <h1>data</h1>
//     </div>
//   );
// };
// function App() {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-center text-3xl font-bold underline">
//         hi
//     </h1>
//     </div>
//   );
// }

export default App;
