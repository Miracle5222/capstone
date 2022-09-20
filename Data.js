export const data = [
  {
    language: "Java",
    modules: [
      {
        key: "1",
        title: "Introduction",
        status: true,
        topic: [
          {
            id: "1.1",
            status: true,
            lesson_name: "A Quick First Look at Computer Programming",
            content: [
              {
                heading: `Programming (or coding) is writing software (computer programs or code). It
involves describing processes and/or procedures (algorithms), that is, the steps it takes
to do something. 
                `,
                paragraph: `In computer programming, these processes/procedures are specified into
detailed lists of instructions – what is called the source code representation of software
(Haas, 2016). This code or program comes in a variety of languages. A computer
programming language, when compared to natural languages which man uses, simply
serves to “bridge the gap between something the computer can understand (binary)
and something that humans can understand, and are capable of crafting programs
with”. (Foord, n.d.)
The most common classification of computer languages is that of high-level and
low level, where the levels are, of course, relative.

The most common classification of computer languages is that of high-level and
low level, where the levels are, of course, relative.
                `,
                code: [],
                image: [],
              },
              {
                heading: `Two general types of programming languages:
High-level language- code is very similar to English so that almost all computer
programming these days are done with them.
Examples: Ada, BASIC, C#, C++, Fortran, HTML, Hugo, Java, Javascript, Logo,
Modula, Perl, PHP, Python, R, RPG, Simula, Smalltalk, Swift, Visual LISP, ZetaLisp

Advantages:
a) easier to write, read, debug (fix errors on) and maintain
b) portable – can be used on many types of computer
c) produces much shorter code than low-level languages

Disadvantages:
  a) generally slower than low-level languages
  b) less efficient in the use of computer resources than low-level languages
  (Prakash, 2017)
                `,
                paragraph: `Low-level language- code is similar to native* machine (computer) language,
that is, ones (1s) and zeroes (0s), also called binary values.

Examples: assembly languages, such as IBM 360 assembler, PDP-10 assembler,
Intel x86 assembler, Linux x86-64 assembler (*a computer has its own low-level
assembler language unique to that computer) `,
                code: [],
                image: [],
              },
              {
                heading: `A. JavaScript (Jones, 2017) code; this is different from Java, programming language
you will be learning in this course:`,
                paragraph: "",
                code: [
                  {
                    language: `javascript`,
                    textCode: `A1.(from the browser console) 
console.log('Hello world!'); 
A2. (or, mixed in with the HTML) 
<button id='button' href='#' onclick='alert("Hello World")'>Click Me</a> 
A3. (or, away from HTML, inside its own <script> tags: 
<script> const btn = document.getElementById('button'); 
btn.addEventListener('click', function() { alert('Hello World!'); }); </script>
                                  `,
                  },
                ],
                image: [],
              },
              {
                heading: `B. Swift (appcoda.com, 2017) program, the language used in Apple devices:`,
                paragraph: "",
                code: [
                  {
                    language: `swift`,
                    textCode: `import UIKit
class ViewController: UIViewController {
override func viewDidLoad() {
  super.viewDidLoad()
  // Do any additional setup after loading the view,
typically from a nib.
}
override func didReceiveMemoryWarning() {
  super.didReceiveMemoryWarning()
  // Dispose of any resources that can be recreated.
}
@IBAction func showMessage(sender: UIButton) {
  let alertController = UIAlertController(title:
"Welcome to My First App", message: "Hello World",
preferredStyle: UIAlertControllerStyle.alert)

  alertController.addAction(UIAlertAction(title: "OK",
style: UIAlertActionStyle.default, handler: nil))
  present(alertController, animated: true, completion: nil)
}
}
                    `,
                  },
                ],
                image: [],
              },
              {
                heading: `C. Linux x86-64 assembly (Fisher, 2018) program:`,
                paragraph: "",
                code: [
                  {
                    language: `haskell`,
                    textCode: `global _start
section .text
_start:
  mov rax, 1 ; write(
  mov rdi, 1 ; STDOUT_FILENO,
  mov rsi, msg ; "Hello, world!\n",
  mov rdx, msglen ; sizeof("Hello, world!\n")
  syscall ; );
  mov rax, 60 ; exit(
  mov rdi, 0 ; EXIT_SUCCESS
  syscall ; );
section .rodata
  msg: db "Hello, world!", 10
  msglen: equ $ - msg `,
                  },
                ],
                image: [],
              },
            ],
          },
          {
            id: "1.2",
            status: false,
            lesson_name: "A Partial History of Computer Programming",
            content: [
              {
                heading: `It took about 100 years between the time the first recorded program was
published (by English noblewoman and mathematician Ada Lovelace) and the time
the first electronic computers were built in the 1940s.
In 1840, Ada Lovelace’s friend, Charles Babbage (the Father of Computing)
gave a lecture in Italy about his mechanical general-purpose computing machine (not
completed) which he called the “Analytical Engine”. A transcript of his lecture was
translated by Lovelace into English, to which she added her own notes.
(softschools.com, n.d.)
               `,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `When Lovelace published her notes (three times longer, took nine months to
finish) in 1843, it contained a section which described steps to be done by the
Analytical Engine on how to calculate Bernoulli numbers, a mathematical sequence.
These steps formed the algorithm of the first published computer program. Since
Babbage’s computer had memory, an arithmetic logic unit (processor), and control
flow for looping, “it would have had all of the key elements of a modern computer”.
(softschools.com, n.d.)
Fast forward to ninety-six years after Babbage’s Analytical Engine, Alan
Turing presented in 1936 the concept of a “universal machine, later called the Turing
machine”, which can “compute anything that is computable” (Zimmermann, 2017).
Thus was born the central concept of the modern computer and the notion of
programming (instructions on how to compute any kind of what) at the machine level.
               `,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `By 1941 John Atanasoff and his graduate student, Clifford Berry, designed a
computer that can solve 29 equations simultaneously. This marked the first time a
computer is able to store information on its main memory.
In 1953 Grace Hopper developed the first computer language, which
eventually became known as COBOL. The following year the FORTRAN programming
language, an acronym for FORmula TRANslation, was developed by a team of
programmers at IBM led by John Backus, according to the University of Michigan. By
1964 Douglas Engelbart showed a prototype of the modern computer, with a mouse
and a graphical user interface (GUI). This marked the evolution of the computer from a
specialized machine for scientists and mathematicians to technology that was more
accessible to the general public (Zimmermann, 2017).
                .
               `,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `From 1974-1977, a number of personal computers hit the market, including
Scelbi & Mark-8 Altair, IBM 5100, Radio Shack's TRS-80 and the Commodore PET. The
Tandy computer would be credited with pioneering the idea of a mass market personal
computer. As one of the first machines whose documentation was intended for nongeeks, it meant that for the first time, non-geeks could write programs and make a
computer do what they wished (Zimmermann, 2017).
Less than two generations (of which halfway through the Internet was born) of
non-geek programmers after that (pun intended), millions of programs (exponentially
boosted by the web) have been developed, both for the benefit, and the bad fortune,
of mankind.
As to whether your future programs will contribute to the benefit or otherwise
of our world, is entirely up to you, dear aspiring programmer/coder/developer.
                
               `,
                paragraph: ``,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "1.3",
            status: false,
            lesson_name: "Flowcharts in Programming",
            content: [
              {
                heading: `A flowchart is one of most useful diagrams to show programs and processes.
Out of many different classifications, the one below (programiz.com, n.d.) is among the
most useful to computing:
                `,
                paragraph: `4 types of flowcharts:

Document flowcharts – show controls over a document-flow through a system
Data flowcharts - show controls over a data flows in a system
System flowcharts - show controls at a physical or resource level
Program flowchart - show the controls in a program within a system 
Computer program flowcharts are used to show control flow in a computer
program. It is sometimes used to show an algorithm without writing the code.
Sometimes they are used for training purposes for beginner programmers who do not
yet know about coding but can understand graphical symbols in flowcharts.`,
                code: [],
                image: [],
              },

              {
                heading: `Symbols Used In Flowcharting

The table below describes all the symbols that are used in making flowchart`,
                paragraph: ``,
                code: [],
                image: [require("./assets/symbols.png")],
              },
              {
                heading: `The sample flowchart below illustrates how to calculate the sum of numbers from 1 to N.`,
                paragraph: ``,
                code: [],
                image: [require("./assets/f1.jpg")],
              },
              {
                heading: `More examples of program flowcharts (programiz.com, n.d.):
1. A flowchart which calculates N! (factorial of N):`,
                paragraph: ``,
                code: [],
                image: [require("./assets/f2.jpg")],
              },
              {
                heading: `1. A flowchart which checks if a number is prime :`,
                paragraph: ``,
                code: [],
                image: [require("./assets/f3.jpg")],
              },
              {
                heading: `2. A flowchart which shows all prime numbers smaller or equal to N :`,
                paragraph: ``,
                code: [],
                image: [require("./assets/f4.jpg")],
              },
              {
                heading: `1. A flowchart which calculates all divisors of N :`,
                paragraph: ``,
                code: [],
                image: [require("./assets/f5.jpg")],
              },
              {
                heading: `A flowchart which checks if 3 numbers can be length of sides of a triangle:`,
                paragraph: ``,
                code: [],
                image: [require("./assets/f6.jpg")],
              },
            ],
          },
          {
            id: "1.4",
            status: false,
            lesson_name: "What is Java?",
            content: [
              {
                heading: `Developed in 1991 and officially released in 1996, Java is a comparatively new
general purpose programming language. Its creator, James Gosling, was then working
at Sun Microsystems with his teammates, notably Patrick Naughton and Mike Sheridan.
In 1994, Gosling realized that such a language would be ideal for use with web
browsers and Java's connection to the internet began (MathBits.com, 2018). In 1995, the
version of the Netscape browser that was released was already capable of running Java
programs. 
                `,
                paragraph: `Why is it called Java? One of the more famous urban legends in the computing world
goes that Java’s first name Oak had to be changed due to a previous trademark. After
many hours of trying to come up with a new name, the development team went out for
coffee and the name Java was born. (MathBits.com, 2018)`,
                code: [],
                image: [],
              },
              {
                heading: `At present, the latest versions of Java are: Java 14, released in March 2020, and
Java 11, a currently supported long-term support (LTS) version, released on September
25, 2018; Oracle released for the legacy Java 8 LTS the last free public update in January
2019 for commercial use, while it will otherwise still support Java 8 with public updates
for personal use up to at least December 2020.
                `,
                paragraph: `For purposes of this class, however, you may download resources from
https://www.oracle.com/java/technologies/mobile-devices-downloads.html. Or, you
can use a favorite alternative of your co-majors in the higher years- Learn Java:
Programming and Tutorials. You can download it from the Play Store into your
smartphone.
                )`,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "1.5",
            status: false,
            lesson_name: "Summary",
            content: [
              {
                heading: `Summary`,
                paragraph: `Two general types of programming languages:
                
High-level language - code is very similar to English so that almost all computer
programming these days are done with them.

Low-level language - code is similar to native* machine (computer) language,
that is, ones (1s) and zeroes (0s), also called binary values.`,
                code: [],
                image: [],
              },
            ],
          },
        ],
      },
      {
        key: "2",
        title: "Primitive Data Types and Arithmetic",
        status: false,
        topic: [
          {
            id: "2.0",
            lesson_name: "Introduction & Objectives",
            status: false,
            content: [
              {
                heading: `Among many other things, the underlying purpose of a program is to provide 
a secure storage of data for processing, offer convenience in handling relevant data about a process and manipulate data in such a way beyond that is capabilities of a conventional human being. All these have one thing in common: data. programs. 
                `,
                paragraph: `Data may be of various types that a computer program can handle in boundless ways depending on the capability and creativity of the programmer.
In this module, you will learn about:

a) data types and their respective uses;
b) variables and constants; and,
c) operations concerning data as represented in Java Programming.`,
                code: [],
                image: [],
              },
              {
                heading: `At the end of the lesson you are expected to have:`,
                paragraph: `1. Distinguished each data and classifying it by type
2. Identified variables and constants and their representation in a program
3. Explained the construction of arithmetic expressions for the purpose of making calculations
4. Created a program that utilized different types of data type.`,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "2.1",
            status: false,
            lesson_name: "Data",
            content: [
              {
                heading: `In the realm of computers, data refer to any information processed, stored, and manipulated by a computer. A sequence of one or more symbols given meaning by specific acts of interpretation. This data may be in the form of text documents, images, audio clips, software programs, or other types of data.
Computer programs refer to this data as a form of resource. Particularly, in Java Programming, there are two (2) classifications of data, namely:

3. Primitive Data (e.g., number, character); and
4. Object Data (types created by the programmer).
`,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `Primitive Data`,
                paragraph: `Java defines eight primitive types of data: byte, short, int, long, char, float, double, and boolean. The primitive types are also commonly referred to as simple types, and both terms will be used in this book. These can be put in four groups:

● Integers - This group includes byte, short, int, and long, which are for whole-valued signed numbers.
● Floating-point numbers - This group includes float and double, which represent numbers with fractional precision
● Characters - This group includes char, which represents symbols in a character set, like letters and numbers.
● Boolean - This group includes boolean, which is a special type for representing true/false values.`,
                code: [],
                image: [],
              },
              {
                heading: `Integer`,
                paragraph: `Java defines four integer types: byte, short, int, and long. All of these are signed, positive and negative values. Java does not support unsigned, positive-only integers. Many other computer languages support both signed and unsigned integers. However, Java’s designers felt that unsigned integers were unnecessary.

The width of an integer type should not be thought of as the amount of storage it consumes, but rather as the behavior it defines for variables and expressions of that type. The Java run-time environment is free to use whatever size it wants, as long as the types behave as you declared them. The width and ranges of these integer types vary widely, as shown in Table 2.1 below:`,
                code: [],
                image: [require("./assets/m2f1.jpg")],
              },
              {
                heading: `Let’s look at each type of integer.

byte`,
                paragraph: `
                The smallest integer type is byte. This is a signed 8-bit type that has a range
from –128 to 127. Variables of type byte are especially useful when you’re working
with a stream of data from a network or file. Byte variables are declared by use of the
byte keyword. For example, the following declares two byte variables called b and c:
byte b, c;

                `,
                code: [],
                image: [],
              },
              {
                heading: `Short
              `,
                paragraph: `short is a signed 16-bit type. It has a range from –32,768 to 32,767. It is
probably the least-used Java type. Here are some examples of short variable
declarations:

short s;
short t;`,
                code: [],
                image: [],
              },
              {
                heading: `Int
              `,
                paragraph: `The most commonly used integer type is int. It is a signed 32-bit type that has a range from –2,147,483,648 to 2,147,483,647. In addition to other uses, variables of type int are commonly employed to control loops and to index arrays. An int type variable is declared as follows:

int x;
int y;`,
                code: [],
                image: [],
              },
              {
                heading: `long
              `,
                paragraph: `long is a signed 64-bit type and is useful for those occasions where an int type is not large enough to hold the desired value. (See Table 2.1)`,
                code: [],
                image: [],
              },
              {
                heading: `Floating-Point Types
              `,
                paragraph: `
Floating-point numbers, also known as real numbers, are used when evaluating expressions that require fractional precision. That is, those numbers that include decimals to which, integer data types cannot handle properly. In Java Programming, there are two (2) types of floating-point types:
                `,
                code: [],
                image: [require("./assets/m2f2.jpg")],
              },
              {
                heading: `Float
              `,
                paragraph: `The type float specifies a single-precision (faster to process and takes half as much space than double) value that uses 32 bits of storage. Variables of type float are useful when you need a fractional component, but don’t require a large degree of precision. A float can be declared this way:
                
float lowTemp, highTemp;`,
                code: [],
                image: [],
              },
              {
                heading: `Double
              `,
                paragraph: `Double precision, as denoted by the double keyword, uses 64 bits to store a value. All transcendental math functions, such as sin( ), cos( ), and sqrt( ), return double values. When you need to maintain accuracy over many iterative calculations, or are manipulating large-valued numbers, double is the best choice.`,
                code: [],
                image: [],
              },
              {
                heading: `Characters
              `,
                paragraph: `In Java, the data type used to store characters is char. Java uses Unicode to represent characters. Unicode defines a fully international character set that can represent all of the characters found in all human languages.`,
                code: [],
                image: [],
              },
              {
                heading: `Here is a program that demonstrates the char variables:
// Demonstrate char data type.
              `,
                paragraph: `This program displays the following output: 
                
 ch1 and ch2: X Y`,
                code: [
                  {
                    language: `java`,
                    textCode: `
class CharDemo {
public static void main(String args[]) {
    char ch1, ch2;
    ch1 = 88; // code for X
    ch2 = 'Y';
    System.out.print("ch1 and ch2: ");
    System.out.println(ch1 + " " + ch2);
  }
}
                    `,
                  },
                ],
                image: [],
              },
              {
                heading: `Notice that ch1 is assigned the value 88, which is the ASCII (and Unicode) value that corresponds to the letter X. As mentioned, the ASCII character set occupies the first 127 values in the Unicode character set.
char can also behave as an integer type in which you can perform arithmetic operations. Consider to following block of codes:

// char variables behave like integers.
              `,
                paragraph: `This will result in the following output:

ch1 contains X
ch1 is now Y

In the program, ch1 is first given the value X. Next, ch1 is incremented. This results in ch1 containing Y, the next character in the ASCII (and Unicode) sequence.`,
                code: [
                  {
                    language: `java`,
                    textCode: `
class CharDemo2 {
public static void main(String args[]) {
    char ch1; ch1 = 'X';
    System.out.println("ch1 contains " + ch1);
    ch1++; // increment ch1
    System.out.println("ch1 is now " + ch1);
  }
}
                    `,
                  },
                ],
                image: [],
              },
              {
                heading: `Booleans`,
                paragraph: `Java has a primitive type, called boolean, for logical values. It can have only
one of two possible values, true or false. This is the type returned by all relational
operators, as in the case of a < b. boolean is also the type required by the
conditional expressions that govern the control statements such as if and for.

Here is a program that demonstrates the boolean type:

// Demonstrate boolean values.

                `,
                code: [
                  {
                    language: `java`,
                    textCode: `
class BoolTest {
public static void main(String args[]) {
    boolean b; b = false;
    System.out.println("b is " + b);
    b = true;
    System.out.println("b is " + b);
    // a boolean value can control the if
statement
    if(b) System.out.println("This is executed.");
    b = false;
    if(b) System.out.println("This is not
executed.");
    // outcome of a relational operator is a
    boolean value
    System.out.println("10 > 9 is " + (10 > 9));
  }
}
                       `,
                  },
                ],
                image: [],
              },
              {
                heading: `The output generated by this program is shown here:`,
                paragraph: `When a boolean value is output by println( ), "true" or "false" is displayed. Second, the
value of a boolean variable is sufficient, by itself, to control the if statement. There is
no need to write an if statement like this:
`,
                code: [
                  {
                    language: `java`,
                    textCode: `
b is false
b is true
This is executed.
10 > 9 is true
                    
                       `,
                  },
                ],
                image: [],
              },
              {
                heading: `if(b==true) …

The outcome of a relational operator, such as <, is a boolean value. This is why
the expression 10>9 displays the value "true." Further, the extra set of parentheses
around 10>9 is necessary because the + operator has a higher precedence than the >`,
                paragraph: `Data Storage
Storing data in Java programs require the usage of Variables. They serve as the
basic unit of storage in a Java program.`,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "2.2",
            status: false,
            lesson_name: "Data Storage",
          },
          {
            id: "2.3",
            status: false,
            lesson_name: "Arithmetic",
          },
          {
            id: "2.4",
            status: false,
            lesson_name: "Operator Precedence",
          },
          {
            id: "2.5",
            status: false,
            lesson_name: "Type Conversion and Casting",
          },
        ],
      },
      {
        key: "3",
        title: "Conditional Statement",
        status: false,
        objectives: "",
        topic: [
          {
            id: "3.0",
            introduction: "Introduction and Objectives",
            status: false,
          },
          {
            id: "3.1",
            status: false,
            lesson_name: "If-Else Statement",
          },
          {
            id: "3.2",
            status: false,
            lesson_name: "If-Else-If Statement",
          },
          {
            id: "3.3",
            status: false,
            lesson_name: "Switch Statement",
          },
        ],
      },
      {
        key: "4",
        title: "Repetition",
        status: false,
        objectives: "",
        topic: [
          {
            id: "4.0",
            introduction: "Introduction and Objectives",
            status: false,
          },
          {
            id: "4.1",
            status: false,
            lesson_name: "Introduction",
          },
          {
            id: "4.2",
            status: false,
            lesson_name: "While Loop",
          },
          {
            id: "4.3",
            status: false,
            lesson_name: "Do While Loop",
          },
          {
            id: "4.4",
            status: false,
            lesson_name: "Increment/Decrement Operators",
          },
          {
            id: "4.5",
            status: false,
            lesson_name: "For Loop",
          },
        ],
      },
      {
        key: "5",
        title: "Methods",
        status: false,
        objectives: "",
        topic: [
          {
            id: "5.0",
            introduction: "Introduction and Objectives",
            status: false,
          },
          {
            id: "5.1",
            status: false,
            lesson_name: "Methods Defined ",
          },
          {
            id: "5.2",
            status: false,
            lesson_name: "Calling a Method",
          },
          {
            id: "5.3",
            status: false,
            lesson_name: "Call Stacks",
          },
          {
            id: "5.4",
            status: false,
            lesson_name: "Void Methods",
          },
          {
            id: "5.5",
            status: false,
            lesson_name: "Passing Arguments by Value",
          },
          {
            id: "5.6",
            status: false,
            lesson_name: "Overloading Methods",
          },

          {
            id: "5.7",
            status: false,
            lesson_name: "The Scope of Variables",
          },
        ],
      },
      {
        key: "6",
        title: "Arrays",
        status: false,
        topic: [
          {
            id: "6.0",
            introduction: "Introduction and Objectives",
            status: false,
          },
          {
            id: "6.1",
            introduction: "Declaring and Creating Arrays ",
            status: false,
          },
          {
            id: "6.2",
            introduction: "Using subscripts with an array",
            status: false,
          },
          {
            id: "6.3",
            introduction: "Passing arrays to a method",
            status: false,
          },
          {
            id: "6.4",
            introduction: "Returning an Array from a Method",
            status: false,
          },
          {
            id: "6.5",
            introduction: "Returning an Array from a Method",
            status: false,
          },
        ],
      },
    ],
  },
];
