 document.write('<u>  <h1>  <i> Welcome  </i>  </u>  </h1>  <br>')
console.log('Welcome')

let eng = parseFloat(prompt("Enter Your English Marks"))
let urdu = parseFloat(prompt("Enter Your Urdu Marks"))
let Maths = parseFloat(prompt("Enter Your Maths Marks"))
let Phy = parseFloat(prompt("Enter Your Physics Marks"))

let obtainedmarks = eng+urdu+Maths+Phy;

let perc=(obtainedmarks/400)*100

let space = " ";

// document.write('obtained Marks' + space  + obtainedmarks + "<br>")
// document.write("Percentage" + space  + perc.toFixed(2) + "%" + "<br>")

// console.log('obtained Marks' + space + obtainedmarks )
// console.log("Percentage" + space + perc + "%" ) 

if (perc<= 100 && perc >= 80)
{
    document.write("Grade Is A+* <br>")
    document.write("Georgeous Performance😍")
    console.log("Grade Is A+*")
    console.log("Georgeous Performance")
    document.write('obtained Marks' + space  + obtainedmarks + "<br>")
document.write("Percentage" + space  + perc.toFixed(2) + "%" + "<br>")

console.log('obtained Marks' + space + obtainedmarks )
console.log("Percentage" + space + perc + "%" ) 

}
else if (perc < 80 && perc >= 70)
    {
        document.write("Grade Is A* <br>")
        document.write("Excellent Work❤")
        console.log("Grade Is A*")
        console.log("Excellent Work")
        document.write('obtained Marks' + space  + obtainedmarks + "<br>")
document.write("Percentage" + space  + perc.toFixed(2) + "%" + "<br>")

console.log('obtained Marks' + space + obtainedmarks )
console.log("Percentage" + space + perc + "%" ) 

    }
   else if (perc <=70 && perc >= 60)
        {
            document.write("Grade Is B* <br>")
            document.write("Good Work👌")
            console.log("Grade Is B*")
            console.log("Good Work")
            document.write('obtained Marks' + space  + obtainedmarks + "<br>")
document.write("Percentage" + space  + perc.toFixed(2) + "%" + "<br>")

console.log('obtained Marks' + space + obtainedmarks )
console.log("Percentage" + space + perc + "%" ) 

        }
     else if (perc <=60 && perc >= 50)
            {
            document.write("Grade Is C* <br>")

             console.log("Grade Is C*")
            }
        else if (perc <=50 && perc >= 30)
        {
            document.write("Fail* <br>")
            document.write("You need improvisation😒")
            console.log("Fail*")
            console.log("You need improvisation")
            document.write('obtained Marks' + space  + obtainedmarks + "<br>")
document.write("Percentage" + space  + perc.toFixed(2) + "%" + "<br>")

console.log('obtained Marks' + space + obtainedmarks )
console.log("Percentage" + space + perc + "%" ) 

        }
        else {
            document.write("Please Enter Valid Numbers")
            console.log("Please Enter Valid Numbers")
            document.write('obtained Marks' + "<br>")
document.write("Percentage" + "<br>")

console.log('obtained Marks' + space + obtainedmarks )
console.log("Percentage" + space + perc + "%" ) 

    }
