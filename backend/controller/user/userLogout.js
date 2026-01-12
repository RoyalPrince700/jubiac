// filepath: /c:/Users/HP/Desktop/ecom/jubiac/backend/controller/user/userLogout.js
async function userLogout(req, res) {
    try {
      const tokenOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set to true in production
        sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // Ensure cookies are sent only to the same site
        path: '/',
      };
  
      console.log("Clearing cookie with options:", tokenOptions); // Debugging log
  
      res.clearCookie("token", tokenOptions);
  
      res.json({
        message: "Logged out Successfully",
        error: false,
        success: true,
        data: []
      });
    } catch (err) {
      res.json({
        message: err.message || err,
        error: true,
        success: false,
      });
    }
  }
  
  module.exports = userLogout;


// async function userLogout(req, res) {
//     try {
//         const tokenOption = {
//             httpOnly : true,
//             secure : true,
//             sameSite : 'None'
//           }

//         console.log("Clearing cookie with options:", tokenOption); // Debugging log

//         res.clearCookie("token", tokenOption);

//         res.json({
//             message: "Logged out Successfully",
//             error: false,
//             success: true,
//             data: []
//         });
//     } catch (err) {
//         res.json({
//             message: err.message || err,
//             error: true,
//             success: false,
//         });
//     }
// }

// module.exports = userLogout;



