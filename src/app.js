    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

    // hbs 

    app.set('view engine', 'hbs');

      const viewsDirectory = path.join (__dirname , "../temp1/views" )
      app.set( "views" , viewsDirectory)

      //////////////////////////////////////////////////////////////////

      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp1/partials")

      hbs.registerPartials(partialsPath)

    app.get('/' , (req , res) => {
        res.render('index' , {
            maintitle: "Welcome",
            subtitle: "Education Website",
            title: "Welcome to our educational website! ",
            desc : "Our site is designed to provide high quality educational resources for students of all ages and backgrounds. Whether you're a student preparing for exams, a professional seeking to enhance your skills, or simply someone who loves to learn, our site has something for you.",
            img: "../images/hero-img.png",
            login: "Go to Login",
            signup: "Go to Signup"
        })
    })

    app.get('/service' , (req , res) => {
        res.render('service' , {
            services : "services",
            prov : "Services I Provide",
            responsive: "Responsive design",
            deck: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsam aliquam ratione, possimus et! Doloremque!",
            great : "great support",
            seo : "seo marketing",
            clean: "Clean Code",
            design: "Graphic design",
            web: "Web design",
        })
    })

    app.get('/aboutus' , (req , res) => {
        res.render('aboutus' , {
            desc : "We offer a wide range of educational content, including articles, videos, interactive quizzes, and much more. Our team of experienced educators works tirelessly to ensure that all of our content is accurate, up-to-date, and engaging.",
            desc2: "Our site covers a variety of subjects, including science, math, English, history, and more. We also offer resources for standardized tests such as the SAT, ACT, and GRE, as well as professional certification exams.",
            offer : "What do we offer",
            title: "ABOUT US",
            img2 : "../images/about.jpg"
        })
    })

    app.get('/login' , (req , res) => {
        res.render('login' , {
            title: "Login", 
            login : "Log in",
            description : "Log in for Educational website",
            reset: "Reset Password",
            back:"Back to login page",
            desc : "Forget Password?",
            login: "Login",
            img3: "../Images/wave.png"
        })
    })
    app.get('/signup' , (req , res) => {
        res.render('signup' , {
            title: "Signup", 
            user : "User name",
            description : "Sign up for Educational website",
            pass: "Password",
            email:"Email address",
            desc : "Do you have an account? ",
            signup: "Sign up",
            LOGIN : " LOG IN",
            img3: "../Images/wave.png"
        })
    })
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
 
