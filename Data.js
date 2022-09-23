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
                paragraph: `
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
            content: [
              {
                heading: `Data Storage
                
Storing data in Java programs require the usage of Variables. They serve as the
basic unit of storage in a Java program.
`,
                paragraph: `Variables
                
A variable is defined by the combination of an identifier, a type, and an
optional initializer. In addition, all variables have a scope, which defines their visibility,
and a lifetime. These elements are examined next.

Declaring a Variable

In Java, all variables must be declared before they can be used. The basic form
of a variable declaration is shown here:

type identifier [ = value ][, identifier [= value ] …];

type is one of Java’s atomic types, or the name of a class or interface. The
identifier is the name of the variable. You can initialize the variable by specifying an
equal sign and a value. Keep in mind that the initialization expression must result in a
value of the same (or compatible) type as that specified for the variable. To declare
more than one variable of the specified type, use a comma-separated list.


                `,
                code: [],
                image: [],
              },
              {
                heading: `Here are several examples of variable declarations syntax of various types. Note that
some include an initialization.
                
Storing data in Java programs require the usage of Variables. They serve as the
basic unit of storage in a Java program.
`,
                paragraph: `The identifiers that you choose have nothing intrinsic in their names that
indicates their type. Java allows any properly formed identifier to have any declared
type.
                `,
                code: [
                  {
                    language: `java`,
                    textCode: `
int a, b, c; // declares three ints, a, b,
and c.
int d = 3, e, f = 5; // declares three more ints,
initializing

// d and f.
byte z = 22; // initializes z.
double pi = 3.14159; // declares an approximation of
pi.
char x = 'x'; // the variable x has the value
'x'.
`,
                  },
                ],
                image: [],
              },
              {
                heading: `The Scope and Lifetime of Variables

So far, all of the variables used have been declared at the start of the main( )
method. However, Java allows variables to be declared within any block.

`,
                paragraph: `Block
Block defines a scope in Java. As such, each time we create a new block, we
also create a new scope. A block is begun with an opening curly brace ‘{‘ and ended
by a closing curly brace ‘}’. A scope determines what objects (or variables) are visible
to other parts of your program. It also determines the lifetime of those objects.
As a general rule, variables declared inside a scope are not visible (that is,
accessible) to code that is defined outside that scope. Thus, when you declare a
variable within a scope, you are localizing that variable and protecting it from
unauthorized access and/or modification. Indeed, the scope rules provide the
foundation for encapsulation.
                `,
                code: [],
                image: [],
              },
              {
                heading: `Scopes can also be nested. Each time you create a block of code, you are
creating a new, nested scope. When this occurs, the outer scope encloses the inner
scope. This means that objects declared in the outer scope will be visible to code
within the inner scope. However, the reverse is not true. Objects declared within the
inner scope will not be visible outside it.
To understand the effect of nested scopes, consider the following program:`,
                paragraph: ``,
                code: [
                  {
                    language: `java`,
                    textCode: `
// Demonstrate block scope.
class Scope {
  public static void main(String args[]) {
    int x; // known to all code within main
    x = 10;

    if(x == 10) { // start new scope
        int y = 20; // known only to this block
        // x and y both known here.
    System.out.println("x and y: " + x + " " + y);
        x = y * 2;
    }
    // y = 100; // Error! y not known here
    // x is still known here.
    System.out.println("x is " + x);
  }
}
                   
`,
                  },
                ],
                image: [],
              },
              {
                heading: `Variable x is declared at the start of main( )’s scope and is accessible to all
subsequent code within main( ). Within the if block, y is declared. Since a block defines
a scope, y is only visible to other code within its block. This is why outside of its block,
the line y = 100; is commented out. If you remove the leading comment symbol, a
compile-time error will occur, because y is not visible outside of its block. Within the if
block, x can be used because code within a block (that is, a nested scope) has access to
variables declared by an enclosing scope.
                `,
                paragraph: ``,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "2.3",
            status: false,
            lesson_name: "Arithmetic",
            content: [
              {
                heading: `Arithmetic
                  
Arithmetic operators are used in mathematical expressions in the same way
that they are used in algebra. The following table lists the arithmetic operators:

                `,
                paragraph: ``,
                code: [],
                image: [require("./assets/m2f3.jpg")],
              },
              {
                heading: `The Basic Arithmetic Operators

The basic arithmetic operations—addition, subtraction, multiplication, and division—all behave as you would expect for all numeric types.
The operands of the arithmetic operators must be of a numeric type. You cannot use them on boolean types, but you can use them on char types, since the char type in Java is, essentially, a subset of int.
The following simple example program demonstrates the arithmetic operators. It also illustrates the difference between floating-point division and integer division.
                `,
                paragraph: ``,
                code: [
                  {
                    language: `java`,
                    textCode: `// Demonstrate the basic arithmetic operators.
class BasicMath {
    public static void main(String args[]) {
      // arithmetic using integers
      System.out.println("Integer Arithmetic");
        int a = 1 + 1;
        int b = a * 3;
        int c = b / 4;
        int d = c - a;
        int e = -d;
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
        System.out.println("d = " + d);
        System.out.println("e = " + e);
      // arithmetic using doubles
      System.out.println("\nFloating Point Arithmetic");
        double da = 1 + 1;
        double db = da * 3;
        double dc = db / 4;
        double dd = dc - a;
        double de = -dd;
        System.out.println("da = " + da);
        System.out.println("db = " + db);
        System.out.println("dc = " + dc);
        System.out.println("dd = " + dd);
        System.out.println("de = " + de);
    }
}               
`,
                  },
                ],
                image: [],
              },
              {
                heading: `When you run this program, you will see the following output:`,
                paragraph: ``,
                code: [
                  {
                    language: `java`,
                    textCode: `   
Integer Arithmetic
a = 2
b = 6
c = 1
d = -1
e = 1
Floating Point Arithmetic
da = 2.0
db = 6.0
dc = 1.5
dd = -0.5
de = 0.5         
`,
                  },
                ],
                image: [],
              },
              {
                heading: `The Modulus Operator
The modulus operator, %, returns the remainder of a division operation. It can be applied to floating-point types as well as integer types. The following example program demonstrates the %:
                `,
                paragraph: ``,
                code: [
                  {
                    language: `java`,
                    textCode: `   
// Demonstrate the % operator.
class Modulus {
  public static void main(String args[]) {
    int x = 42;
    double y = 42.25;
    System.out.println("x mod 10 = " + x % 10);
    System.out.println("y mod 10 = " + y % 10);
  }
}

When you run this program, you will get the following output:
x mod 10 = 2
y mod 10 = 2.25    
`,
                  },
                ],
                image: [],
              },
              {
                heading: `Arithmetic Compound Assignment Operators
Java provides special operators that can be used to combine an arithmetic operation with an assignment. As you probably know, statements like the following are quite common in programming:

a = a + 4;

In Java, you can rewrite this statement as shown here:

a += 4;

This version uses the += compound assignment operator. Both statements perform the same action: they increase the value of a by 4.
Here is another example,

a = a % 2;

which can be expressed as

a %= 2;

In this case, the %= obtains the remainder of a /2 and puts that result back into`,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `There are compound assignment operators for all of the arithmetic, binary operators. Thus, any statement of the form
var = var op expression;

can be rewritten as

var op= expression;`,
                paragraph: `The compound assignment operators provide two benefits. First, they save you a bit of typing, because they are “shorthand” for their equivalent long forms. Second, in some cases they are more efficient than are their equivalent long forms. For these reasons, you will often see the compound assignment operators used in professionally written Java programs.`,
                code: [],
                image: [],
              },
              {
                heading: `Here is a sample program that shows several op= assignments in action:`,
                paragraph: ``,
                code: [
                  {
                    language: `java`,
                    textCode: ` // Demonstrate several assignment operators.
class OpEquals {
  public static void main(String args[]) {
      int a = 1;
      int b = 2;
      int c = 3;
      a += 5;
      b *= 4;
      c += a * b;
      c %= 6;
      System.out.println("a = " + a);
      System.out.println("b = " + b);
      System.out.println("c = " + c);
  }
}
The output of this program is shown here:
a = 6
b = 8
c = 3`,
                  },
                ],
                image: [],
              },
              {
                heading: `Increment and Decrement`,
                paragraph: `The increment operator (++) increases its operand by one. The decrement operator (--) decreases its operand by one. For example, this statement:
x = x + 1;

can be rewritten like this by use of the increment operator:

x++;

Similarly, this statement:

x = x - 1;

is equivalent to

x--;`,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "2.4",
            status: false,
            lesson_name: "Operator Precedence",
            content: [
              {
                heading: `Operator Precedence
Table 2.4 shows the order of precedence for 
Java operators, from highest to lowest. Operators in the same row are equal in precedence.
In binary operations, the order of evaluation is left to right (except for assignment, which evaluates right to left). 
Although they are technically separators, the [ ], ( ), and . can also act like operators. In that capacity, they would have the highest precedence.
Also, notice the arrow operator (->). It was added by JDK 8 and is used in lambda expressions.

`,
                paragraph: ``,

                code: [],
                image: [require("./assets/m2f4.jpg")],
              },
              {
                heading: `Parenthesis
Parentheses raise the precedence of the operations that are inside them. This is often necessary to obtain the result you desire. For example, consider the following expression:

a >> b + 3

This expression first adds 3 to b and then shifts a right by that result. That is, this expression can be rewritten using redundant parentheses like this:

a >> (b + 3)
`,
                paragraph: ``,

                code: [],
                image: [],
              },
              {
                heading: `However, if you want to first shift a right by b positions and then add 3 to that result, you will need to parenthesize the expression like this:
(a >> b) + 3
`,
                paragraph: `In addition to altering the normal precedence of an operator, parentheses can sometimes be used to help clarify the meaning of an expression. For anyone reading your code, a complicated expression can be difficult to understand. Adding redundant but clarifying parentheses to complex expressions can help prevent confusion later. For example, which of the following expressions is easier to read?

a | 4 + c >> b & 7
(a | (((4 + c) >> b) & 7))

One other point: parentheses (redundant or not) do not degrade the performance of your program. Therefore, adding parentheses to reduce ambiguity does not negatively affect your program.`,

                code: [],
                image: [],
              },
            ],
          },
          {
            id: "2.5",
            status: false,
            lesson_name: "Type Conversion and Casting",
            content: [
              {
                heading: `Type Conversion and Casting
When one type of data is assigned to another type of variable, an automatic type conversion will take place if the following two conditions are met:

• The two types are compatible.
• The destination type is larger than the source type.

When these two conditions are met, a widening conversion takes place. For example, the int type is always large enough to hold all valid byte values, so no explicit cast statement is required.
`,
                paragraph: `For widening conversions, the numeric types, including integer and floating-point types, are compatible with each other. However, there are no automatic conversions from the numeric types to char or boolean. Also, char and boolean are not compatible with each other.
As mentioned earlier, Java also performs an automatic type conversion when storing a literal integer constant into variables of type byte, short, long, or char.`,

                code: [],
                image: [],
              },
              {
                heading: `Casting Incompatible Types
Although the automatic type conversions are helpful, they will not fulfill all needs. For example, what if you want to assign an int value to a byte variable? This conversion will not be performed automatically, because a byte is smaller than an int. This kind of conversion is sometimes called a narrowing conversion, since you are explicitly making the value narrower so that it will fit into the target type.`,
                paragraph: `To create a conversion between two incompatible types, you must use a cast. A cast is simply an explicit type conversion. It has this general form:
(target-type) value
Here, target-type specifies the desired type to convert the specified value to. For example, the following fragment casts an int to a byte. If the integer’s value is larger than the range of a byte, it will be reduced modulo (the remainder of an integer division by the) byte’s range.

int a;
byte b;
// …
b = (byte) a;`,

                code: [],
                image: [],
              },
              {
                heading: `A different type of conversion will occur when a floating-point value is assigned to an integer type: truncation. As you know, integers do not have fractional components. Thus, when a floating-point value is assigned to an integer type, the fractional component is lost. For example, if the value 1.23 is assigned to an integer, the resulting value will simply be 1. The 0.23 will have been truncated. Of course, if the size of the whole number component is too large to fit into the target integer type, then that value will be reduced modulo the target type’s range.
The following program demonstrates some type conversions that require casts:
// Demonstrate casts.`,
                paragraph: ``,

                code: [],
                image: [],
              },
              {
                heading: ``,
                paragraph: `This program generates the following output:

Conversion of int to byte.

i and b 257 1

Conversion of double to int.

d and i 323.142 323

Conversion of double to byte.

d and b 323.142 67

Let’s look at each conversion. When the value 257 is cast into a byte variable, the result is the remainder of the division of 257 by 256 (the range of a byte), which is 1 in this case. When the d is converted to an int, its fractional component is lost. When d is converted to a byte, its fractional component is lost, and the value is reduced modulo 256, which in this case is 67.`,

                code: [
                  {
                    language: `java`,
                    textCode: `class Conversion {
public static void main(String args[]) {
    byte b;
    int i = 257;
    double d = 323.142;
    System.out.println("\nConversion of int to byte.");
    b = (byte) i;
    System.out.println("i and b " + i + " " + b);
    System.out.println("\nConversion of double to int.");
    15
    i = (int) d;
    System.out.println("d and i " + d + " " + i);
    System.out.println("\nConversion of double to byte.");
    b = (byte) d;
    System.out.println("d and b " + d + " " + b);
    }
}`,
                  },
                ],
                image: [],
              },
            ],
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
            content: [
              {
                heading: `Learning Outcomes:
                
At the end of this module, student should be able to:

1. Write conditional statement using the structure of "if, else-if, and else" statement
2. Write conditional statement using the structure of switch statements.
3. Create conditoinal statement, defining criteria when a program should take certain actions.
4. Analayze programs with nexted conditional statement.
5. Design solutions to a problem using conditional statements.
                `,
                paragraph: `Introduction

A conditional statement generally consist of two parts: a condition that is determinable by a boolean value of true or false
and certain block of codes that need to be executed when the condition is fulfilled. Using conditional statements will change the flow of the execution and branch out based on changes made to the state of the program.This module will discuss the different ways of making conditional statements, and how they are declared and used in the program.

                `,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "3.1",
            status: false,
            lesson_name: "If-Else Statement",
            content: [
              {
                heading: `If-Else Statement
                        
To begin creating a conditional statement, enter the if keyword followed by its corresponding condition insed a parenthesis. Then, add the codes that need to be executed between the open and close curly braces if the condition is true.

if there is a need to execute certain codes when the condition is false, add an else keyword and insert the codes between the open and curly braces that follow it.

Below is the general syntax of an if-else statement:
                `,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `
if(condition){
  statements to be executed if the condition is true
}else{
  statements to be executed if the condition is false
}`,
                  },
                ],
                image: [],
              },
              {
                heading: `Below is the equivalent flowchart of an if-else statement:
                `,
                paragraph: `Figure XX.1 Flowchar of an if-else statement
                
The else keyword is optional and may not necessarily be written on the program if it does not require executing certin instructions if the condition evaluated if false.
However, if an else statement is written, it will look for the last instance of if and partners itself with it. If an else statement is written but does not
have an if keyword to partner itself into, the program will return and error and it will not run.`,
                code: [],
                image: [require("./assets/m3p1.jpg")],
              },
              {
                heading: `Figure XX.1 Flowchar of an if-else statement
                
The else keyword is optional and may not necessarily be written on the program if it does not require executing certin instructions if the condition evaluated if false.
However, if an else statement is written, it will look for the last instance of if and partners itself with it. If an else statement is written but does not
have an if keyword to partner itself into, the program will return and error and it will not run.
`,
                paragraph: ``,
                code: [],
                image: [require("./assets/m3p2.jpg")],
              },
              {
                heading: `Example 3.1:
Write a program that will accept a user entered number and determine whether it is even or odd.`,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `import java.util.Scanner;

public class SampleProgram{
  public static void main(String[] args){
    int number;
    Scanner userInput = new Scanner(System.in);

    System.out.printLn("Enter a number:");
    number = userInput.nextInt();

    if(number % 2 == 0){
      System.out.printLn("Even number.");
    }else{
      System.out.printLn("Odd number.");
    }
  }
}`,
                  },
                ],
                image: [],
              },
            ],
          },
          {
            id: "3.2",
            status: false,
            lesson_name: "If-Else-If Statement",
            content: [
              {
                heading: `If-Else-IfStatement
                
Besides the else statement, the keyword else if can be used if the programmer wants to write another specific condition if the initial if condition is false.
The number of how many else if statements can be written is virtually unlimited, but like else, it cannot exist without and if statement to partner itself unto.
Else if statementsare optional and the program can run with or witout it.

if the if condition is true, it will not execute the codes written in the else if and else section.
However, if a certain else if statement is true, it will not execute the other else if statements including the else as well.

Below is the general syntax of an if-else statement:`,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `
if(condition){
  statements to be executed if the condition is true
}else if(condition2){
  statements to be executed if conditional is false but condition2 is true
}else{
  statements that need to be executed if the conditions above are false
}`,
                  },
                ],
                image: [],
              },
              {
                heading: ``,
                paragraph: `Figure XX.3 Flowchar of an if-else if statement`,
                code: [],
                image: [require("./assets/m3p3.jpg")],
              },
              {
                heading: `Example 3.2:
                
Write a program that will accept a user inputted number and determine whether it is a negative, positive or just a zero number.`,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `import java.util.Scanner;

public class SampleProgram{
  public static void main(String[] args){
    int number;
    Scanner userInput = new Scanner(System.in);

    System.out.printLn("Enter a number:");
    number = userInput.nextInt();

    if(number > 0){
      System.out.printLn("Positive number.");
    }else if(number == 0){
      System.out.printLn("Zero number.");
    }else{
      System.out.printLn("Negative number.");
    }
  }
}`,
                  },
                ],
                image: [],
              },
            ],
          },
          {
            id: "3.3",
            status: false,
            lesson_name: "Switch Statement",
            content: [
              {
                heading: `A switch statement is used to perform different actions based on different conditions provided. To be able to use a swtich statement, start by
writing the swtich keyword followed by an expression enclosed in a parenthesis. This expression will be evaluated once by the compiler.

Then, create certain cases which will match the value of the expression. If there is a match, that associated block of code is executed. To create cases, write the case keyword follwed by the value and a colon.
In order to prevent the program to perform code blocks from other cases, especially the ones inside the default section, a break keyword must be added at the last line of every case code block. This will stop the execution and exits the switch statement. It is not neccessary to add  a break keyword in the last case of a switch expression since the statement end there.`,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `If there are no case matches, the default keyword is executed and it will perform the code blocks written in that section. It may not also necessarily be the last case in a switch block. A swtich statement value, the first one is selected and performed.
                
Below is the general syntax of switch statement:`,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `
Switch(expression){
  case x:
    codeblock
    break;
  case y:
    codeblock
    break;
  case z:
    codeblock
    break;
  default:
    code block
}
                `,
                  },
                ],
                image: [],
              },
              {
                heading: `Example 3.3:`,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `
public class SampleProgram{
  public static void main(String[] args){
    int date;
    Scanner userInput = new Scanner(System.in);
    System.out.printLn("Enter a Date:");
    date = userInput.nextInt();
    Switch(date){
      case 0:
        System.out.printLn("Sunday");
        break;
      case 1:
        System.out.printLn("Monday");
        break;
      case 2:
        System.out.printLn("Tuesday");
        break;
      case 3:
        System.out.printLn("Wednesday");
        break;
      case 4:
        System.out.printLn("Thursday");
        break;
      case 5:
        System.out.printLn("Friday:");
        break;
      case 6:
        System.out.printLn("Saturday");
        break;
      default:
        System.out.printLn("No date found.");
    }
  }
}

                `,
                  },
                ],
                image: [],
              },
            ],
          },
        ],
      },
      {
        key: "4",
        title: "Repetition",
        status: false,

        topic: [
          {
            id: "4.0",
            introduction: "Introduction and Objectives",
            status: false,
            content: [
              {
                heading: `Learning Outcomes:
                
At the end of the lesson you are expected to have;

1) Applied the correct syntax and appropriate use of Java repetition control structures
2) Used postfix increment and decrement operators
3) Created a program that applies appropriate use of Java repetition control structures.

                `,
                paragraph: `Introduction
Using Repetitions allows repeating procedures to be expressed in code using a few lines of code and controlled
dynamically in program-defined conditions and rules. When creating computer programs that require repeating logic
and or procedures, writing the same code redundantly to achieve a certain goal is ineffective. For these kinds of cases,
Repetitions are useful to eliminate these redundancies and make written code brief by minimizing the lines of code to
write making it readable and maintainable. This chapter tackles on how repetitions are implemented and applied in
various cases in Java programming.
                
                `,
                code: [],
                image: [],
              },
              {
                heading: `Repetition Defined
Repetition means repeating a sequence of instructions a certain number of times, or until some specific result is
achieved. In programming terms this means loops of all kinds, such as repeat, for, while, until etc. In computer
programming repetitions are implemented in the form of loop statements. `,
                paragraph: `General Loop Structure
The following is a flowchart representation of the logic of a loop structure. A loop is structure consists of a condition
and the statements to execute. The flow chart starts by checking if a given condition is satisfied, if a condition is not
yet satisfied (false) the flow proceeds with performing the series of statements/code specified on the next step. After
the statements/codes have been executed, the flow returns to the checking if the given condition is satisfied. The flow
repeats n number of repetitions until the condition is satisfied pointing the flow to terminate or, proceed to the next
part of the flow. For a visual representation a Flow Chart representation is presented below in figure 4.1.1.
                
                `,
                code: [],
                image: [],
              },
              {
                heading: ``,
                paragraph: `There are three (3) types of loops in Java programming:

● While Loop;
● Do While Loop;
● And For Loop;

Each type of loop follows the loop structure given above.`,
                code: [],
                image: [require("./assets/m4p1.jpg")],
              },
            ],
          },

          {
            id: "4.1",
            status: false,
            lesson_name: "While Loop",
            content: [
              {
                heading: `While Loop
The While Loop is declared using the code template given below. A condition is specified between the parentheses
next to the while keyword. This tells the computer to repeat the execution of statements written within the loop’s body
while a specified condition is true. When the condition is at some point of the execution no longer met, the loop stops
and proceeds to the next line of code.


`,
                paragraph: `The example below shows a Java program written to move an imaginary car until it has moved more than 10
kilometers. The body of the code begins by declaring and initializing the variables needed in the program. A variable
car_movement_in_km using an integer data type is declared to hold the value of how far the car has travelled in
kilometers. The car_movement_in_km variable is initialized with the value zero, specifying that it has not yet moved.`,
                code: [
                  {
                    language: "java",
                    textCode: `Code Template:
while(<condition>)
{
    <statement>
}`,
                  },
                ],
                image: [],
              },
              {
                heading: `
After the declaration and initialization, a While Loop is written to repeat the statements in its body while the car has
not yet moved more than 10 kilometers. Within the body of the loop, it is written that the car moves 1 kilometer and
prints how many kilometers the car has travelled. The car is moved 1 kilometer by incrementing the value of variable
car_movement_in_km every passage of the loop. The printing of how many kilometers the car has traveled is also done
every passage of the loop. After the loop has stopped a message will be printed saying that the car is now in the garage.
`,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `Example:`,
                paragraph: `Output:
The Car has travelled 1 kilometer/s
The Car has travelled 2 kilometer/s
The Car has travelled 3 kilometer/s
The Car has travelled 4 kilometer/s
The Car has travelled 5 kilometer/s
The Car has travelled 6 kilometer/s
The Car has travelled 7 kilometer/s
The Car has travelled 8 kilometer/s
The Car has travelled 9 kilometer/s
The Car has travelled 10 kilometer/s
The Car is now in the Garage!`,
                code: [
                  {
                    language: "java",
                    textCode: `class myLoopProgram
{
  public static void main(String args[])
  {
  int car_movement_in_km = 0;
  while(car_movement_in_km < 10)
  {
  car_movement_in_km = car_movement_in_km + 1;
  System.out.println(“The Car has travelled ” + car_movement_in_km +
  “ kilometer/s”);
  }
  System.out.println(“The Car is now in the Garage!”);
  }
}`,
                  },
                ],
                image: [],
              },
            ],
          },
          {
            id: "4.2",
            status: false,
            lesson_name: "Do While Loop",
            content: [
              {
                heading: `Do While Loop

The Do While Loop is declared using the code template given below. It is similar to the While Loop except that it
executes the statements within its body first before checking the specified condition for repetition. A condition is
specified between the parentheses after the while keyword telling the computer to repeat the execution of statements
within its body while a certain condition is met. When the condition is at some point of the execution no longer met,
the loop stops and proceeds to the next line of code.

Code Template:`,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `do
{
<statement>
}
while(<condition>)
`,
                  },
                ],
                image: [],
              },
              {
                heading: `On example 1 given below, a Java program is written to hit an imaginary player until the player has died. The body
of the code begins by declaring and initializing the variables needed in the program. A variable player_life using an
integer data type is declared to hold the value of how much remaining life the player has. The player_life variable is
initialized with the value Ten (10), specifying that the player has a full life. After the declaration and initialization, a
Do While Loop is written to repeat the statements in its body while the player has a remaining life of more than Zero
(0). Within the body of the loop, it is written that the player is hit and prints the remaining lives of the player. The
player is hit by decrementing the value of variable player_life every passage of the loop. The printing of the remaining
lives of the player is also done every passage of the loop. After the loop has stopped a message will be printed saying
that the player has died and the game is over.`,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `Example 1:
                `,
                paragraph: `Output 1:

The Player is hit! Remaining Life = 9
The Player is hit! Remaining Life = 8
The Player is hit! Remaining Life = 7
The Player is hit! Remaining Life = 6
The Player is hit! Remaining Life = 5
The Player is hit! Remaining Life = 4
The Player is hit! Remaining Life = 3
The Player is hit! Remaining Life = 2
The Player is hit! Remaining Life = 1
The Player is hit! Remaining Life = 0
The Player has died, Game Over!`,
                code: [
                  {
                    language: "java",
                    textCode: `class myLoopProgram {
public static void main(String args[]) {
  int player_life = 10;
  do
    {
      player_life = player_life - 1;
      System.out.println(“The Player is hit! Remaining Life = ” + player_life );
    }
      while(player_life > 0)
      System.out.println(“The Player has died, Game Over!”);
    }
}`,
                  },
                ],
                image: [],
              },
            ],
          },
          {
            id: "4.3",
            status: false,
            lesson_name: "Increment/Decrement Operators",
            content: [
              {
                heading: `A useful tool in implementing looping statements are increment and decrement operators. These operators
serve as shorthand syntaxes to specify an increment operation or a decrement operation on an integer variable. The
shorthand increment or decrement operation is indicated by the following syntax:

Code Template:

<variable_name><operation><operation>

On the example given below a variable named x is declared and initialized with a value of zero (0). The variable is
incremented by specifying the shorthand syntax x++ and is then printed to display the value of x. After displaying the
value of the variable x, the variable is decremented by specifying the shorthand syntax x--. The value of the variable x
is then displayed to the user.

                `,
                paragraph: `Output:
The value of x is 1
The value of x is 0
                `,
                code: [
                  {
                    language: "java",
                    textCode: `class myProgram{
public static void main(String args[]){
  int x = 0;
  x++;
  System.out.println(“The value of x is ” + x);
  x--;
  System.out.println(“The value of x is ” + x);
  }
}
                    
`,
                  },
                ],
                image: [],
              },
            ],
          },
          {
            id: "4.4",
            status: false,
            lesson_name: "For Loop",
            content: [
              {
                heading: `The “for loop” looping statement utilizes the increment/decrement operators in its condition syntax. The statement
is composed of an initialization condition, testing condition and an increment or decrement operator.

Code Template:`,
                paragraph: `On the example below, a Java code is written to append text to a string variable 4 times. A variable named myString
with the datatype String is declared and initialized with the value “Hello”. A for loop control is then implemented
with an initialization condition int i=0 which indicates that the loop counter is a variable named i with a value of zero
(0), a testing condition i<4 which indicated that the loop shall continue when the value of the variable i is less than four (4), and an increment operator i++ which indicates that the variable i is incremented on each cycle of the loop.
On each cycle of the loop the variable myString is appended with the word “cycle” and the corresponding value of
the loop counter i. The contents of the variables are then printed on the screen presenting the values of the variables.
                `,
                code: [
                  {
                    language: "java",
                    textCode: `for(<initialization condition; testing condition; increment/decrement>)
{
  <statement>
}
                                   
`,
                  },
                ],
                image: [],
              },
              {
                heading: `Example:
                `,
                paragraph: `Output:

Current content of myString is Hello
Current content of myString is Hellocycle0
Current content of myString is Hellocycle0cycle1
Current content of myString is Hellocycle0cycle1cycle2
Current content of myString is Hellocycle0cycle1cycle2cycle3`,
                code: [
                  {
                    language: "java",
                    textCode: `class myForLoopProgram{
public static void main(String args[]){
  String myString = “Hello”;

  for(int i=0; i<4; i++){
    myString = myString + “cycle ” + i;
    System.out.println(“Current content of myString is ” + value );
  }
}
                                   
`,
                  },
                ],
                image: [],
              },
            ],
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
            content: [
              {
                heading: `By the end of this module, student must be able to:

1. Describe what methods are.
2. Create a new Method.
3. Demonstrate how static methods and fields are associated with classes rather
than objects.
4. Explain how the method-call/return mechanism is supported by the methodcall stack.
5. Associate argument promotion and casting.
6. Explain how the visibility of declarations is limited to specific regions of
programs.
7. Determine what method overloading is and how to create overloaded
methods.

                `,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: `Introduction

Good programmers write in a modular fashion which allows for several programmers to
work independently on separate concepts which can be assembled at a later date to
create the entire project. The use of methods will be our first step in the direction of
modular programming.
Methods are time savers; in that they allow for the repetition of sections of code without
retyping the code. In addition, methods can be saved and utilized again and again in
newly developed programs.
In this module, you’ll learn about Java methods, how to define a Java method and use
them in your program with the help of examples.`,
                paragraph: ``,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "5.1",
            status: false,
            lesson_name: "Methods Defined ",
            content: [
              {
                heading: `A Java method is a collection of statements that are grouped together to perform a task.
Methods can be used to define reusable code and organize and simplify coding.
In general, a method has the following syntax: `,
                paragraph: `The following method calculates the sum of two integers. The sum is the method name,
                it has two int parameters, num1 and num2, the sum of which is the returned by the
                method.
                `,
                code: [
                  {
                    language: "java",
                    textCode: `modifier returnValueType methodName(list of parameters) {
// method body;
}
                  `,
                  },
                ],
                image: [],
              },
              {
                heading: `The following method calculates the sum of two integers. The sum is the method name,
it has two int parameters, num1 and num2, the sum of which is the returned by the
method.
                `,
                paragraph: ``,
                code: [],
                image: [require("./assets/m5p1.png")],
              },
              {
                heading: `The method header specifies the modifiers, return value type, method name, and
parameters of the method. The modifier, which is optional, tells the compiler how to
call the method. The static modifier is used for all the methods in this chapter. A method
may return a value. The returnValueType is the data type of the value the method
returns. If the method doesn’t return a value, the returnValueType is the keyword void.
For example, returnValueType in the main method is void as well as
System.out.println. The parameter list refers to the type, order, and number of the
parameters of a method. The method name and the parameter list together constitute the method signature. Parameters are optional; a method may contain no parameters. The variables defined in the method header are knows as formal parameters. When a method is invoked, you pass a value to the parameter. This value is referred to as actual parameter or argument. The method body contains a collection of statements that define what the method does. A return statement using the keyword return is required for a non-void metho`,
                paragraph: ``,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "5.2",
            status: false,
            lesson_name: "Calling a Method",
            content: [
              {
                heading: `To use a method, you have to call or invoke it. There are two ways to call a method; the
choice is based on whether the method returns a value or not.
If the method returns a value, a call to the method is usually treated as a value.`,
                paragraph: `If the method returns void, a call to the method must be a statement.

System.out.println(“Welcome to Java Programming!”); `,
                code: [
                  {
                    language: "java",
                    textCode: `int result = sum(5, 7);
System.out.println(“The sum of the two integers is “ + result);
                    `,
                  },
                ],
                image: [],
              },
              {
                heading: `When a program calls a method, program control is transferred to the called method. A
called method returns control to the caller when its return statement is executed or when
its method-ending closing brace is reached.
Below is an example of defining and calling the method sum.`,
                paragraph: `Output:

The sum of the two integers is 12
                `,
                code: [
                  {
                    language: "java",
                    textCode: `// MethodSum.java: Demonstrate using the sum method.
public class MethodSum {
  // Main method
  public static void main(String[] args) {
      int val1 = 5;
      int val2 = 7;
      int result = sum(val1, val2);
        System.out.println(“The sum of the two integers is “ + result);
    }
      // Returns the sum of two integers
      public static int sum(int num1, int num2) {
        return num1 + num2;
    }
}
`,
                  },
                ],
                image: [],
              },
              {
                heading: `The main method is just like any other method except that it is invoked by the Java
interpreter. The main method’s header is always the same, like the one in this example,
with the modifiers public and static, return value type void, method name main, and a
parameter of the String[] type. String[] indicates that the parameter is an array of String.
The statements in main method may invoke other methods that are defined in the class
that contains the main method or in other classes. The main method invokes sum(val1,
val2), which is defined in the same class with the main method. When the sum method
is invoked, variable val1’s value 5 is passed to num1, and variable val2’s value 2 is passed
to num2 in the sum method.

The flow of control transfers to the sum method. The sum method is executed. When the
return statement in the sum method is executed, the sum method returns the control to
its caller.`,
                paragraph: ``,
                code: [],
                image: [],
              },
              {
                heading: ``,
                paragraph: `Figure 6.2. When the sum method is invoked, the flow of control transfers to it. Once the

sum method is finished, it returns control back to the caller.
The variables defined in the main method are val1, val2, and result. The variables
defined in the sum method are num1 and num2. The variables num1 and num2 are defined in the method signature and are parameters of the method. There methods are
passed through method invocation.
                `,
                code: [],
                image: [require("./assets/m5p2.png")],
              },
              {
                heading: ``,
                paragraph: `CAUTION:

A return statement is required for a non void method.

NOTE:

One of the benefits of methods is for sharing and reuse . The sum method can
be invoked from any class besides MethodSum . If you create a new class Test , you can
invoke the sum method using ClassName.met hodName (i.e., MethodSum.sum
                `,
                code: [],
                image: [require("./assets/m5p3.png")],
              },
            ],
          },
          {
            id: "5.3",
            status: false,
            lesson_name: "Call Stacks",
            content: [
              {
                heading: `Each time a method is invoked, the system stores parameters and local variables in an
area of memory, known as a stack, which stores elements in last-in first-out fashion.
When a method calls another method, the caller’s stack space is kept intact, and new
space is created to handle the new method call. When a method finishes its work and
returns to its caller, its associated space is released. The variables defined in the main
method are val1, val2, and result. The variables defined in the sum method are num1 and
num2. The variables num1 and num2 are defined in the method signature and are
parameters of the method. Their values are passed through method invocation.
                `,
                paragraph: ``,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "5.4",
            status: false,
            lesson_name: "Void Methods",
            content: [
              {
                heading: `This section shows how to declare a void method which does not return a value.

Below is an example of using void Method
                `,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `public class MethodSum {
// Main method
  public static void main(String[] args) {
    sayHello(“John”);
    }
    // Method that prints Hello with name
  public static void sayHello(String name) {
    System.out.println(“Hello “ + name);
  }
}
`,
                  },
                ],
                image: [],
              },
            ],
          },
          {
            id: "5.5",
            status: false,
            lesson_name: "Passing Arguments by Value",
            content: [
              {
                heading: `When calling a method, you need to provide arguments, which must be given in the same
order as their respective parameters in the method specification. This is known as
parameter order association.
You can use nPrintName(“John”, 5) to print the name “John” 5 times
                `,
                paragraph: `CAUTION: The arguments must match the parameters in order, number, and compatible type,
as defined in the method signature.`,
                code: [
                  {
                    language: "java",
                    textCode: `public static void nPrintName(String name, int n) {
  for(int i=0; i<n; i++) {
    System.out.println(name);
  }
}
`,
                  },
                ],
                image: [],
              },
              {
                heading: `Below is an example of Passing Arguments by Value`,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `public class TestNPrint {
  // Main method
  public static void main(String[] args) {
      String name = “John”;
      nPrintName (name, 5);
    }
        // Method that prints the name with a number of times
  public static void nPrintName(String name, int n) {
      for(int i=0; i<n; i++) {
        System.out.println(name);
      }
  }
}
`,
                  },
                ],
                image: [],
              },
              {
                heading: `When you invoke a method with a parameter, the value of the argument is passed to the
parameter. This is referred to as pass by value. If the argument is a variable, the value
of the variable is passed to the parameter. The variable is not affected, regardless of the
changes made to the parameter inside the method.
The arguments and parameters may have the same name; however, no change occurs
because the parameter is a local variable in the method with its own memory space. The
local variable is allocated when the method is invoked, and it disappears when the method
is returned to its caller.`,
                paragraph: ``,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "5.6",
            status: false,
            lesson_name: "Overloading Methods",
            content: [
              {
                heading: ``,
                paragraph: `If you need to find the sum of two floating-point numbers, the code above shows you just
that. If you call sum with int parameters, the sum method that expects int parameters will
be invoked. If you call sum with double parameters, the sum method that expects double parameters will be invoked. This is referred to as method overloading; that is, two or
more methods have the same name but different parameters lists. The Java compiler
determines which method is used based on the method signature.
                `,
                code: [
                  {
                    language: "java",
                    textCode: `public static double sum(double num1, double num2) {
    return num1 + num2;
}
`,
                  },
                ],
                image: [],
              },
              {
                heading: `Below is the example of Method Overloading
                `,
                paragraph: `Output:

The sum of 3 and 4 is 7
The sum of 5.3 and 2.5 is 7.8
                `,
                code: [
                  {
                    language: "java",
                    textCode: `public class MethodOverloading {
    // Main method
    public static void main(String[] args) {
        System.out.println(“The sum of 3 and 4 is “ + sum(3, 4));
        System.out.println(“The sum of 5.3 and 2.5 is “ + sum(5.3, 2.5));
    }
    // Returns the sum of two integers
    public static int sum(int num1, int num2) {
        return num1 + num2;
    }
    // Returns the sum of two floating-point numbers
    public static double sum(double num1, double num2) {
        return num1 + num2;
    }
}
                      
`,
                  },
                ],
                image: [],
              },
              {
                heading: `The program invokes two different sum methods that will have the same name: sum(3, 4)
and sum(5.3, 2.5). When calling sum(3, 4), The sum method for finding the sum of two
integers is invoked. When calling sum(5.3, 2.5), the sum method for finding the sum of
two doubles is invoked. The Java compiler finds the most specific method for a method
invocation. Since the method sum(int, int) is more specific than sum(double, double),
sum(int, int) is used to invoke sum(3, 4). Overloading methods can make programs
clearer and more readable. Methods that perform closely related tasks should be given
the same name. Overloaded methods must have different parameter lists. You can’t
overload methods based on different modifiers or return types.`,
                paragraph: `NOTE: 
Sometimes there may be two or more possible matches for an invocation of a method,
but the compiler cannot determine the most specific match. This is referred to as ambiguous
invocation. Ambiguous invocation is a compilation error.`,
                code: [],
                image: [],
              },
              {
                heading: ``,
                paragraph: `Both sum(int, double) and sum(double, int) are possible candidates to match
sum(1, 2). Since neither of them is more specific than the other, the invocation is
ambiguous.
                `,
                code: [
                  {
                    language: "java",
                    textCode: `
  public static double sum(int num1, double num2) {
    return num1 + num2;
  }
  public static double sum(double num1, int num2) {
    return num1 + num2;
}
                      
`,
                  },
                ],
                image: [],
              },
            ],
          },

          {
            id: "5.7",
            status: false,
            lesson_name: "The Scope of Variables",
            content: [
              {
                heading: `A local variable is defined inside a method. Scope of a variable is the part of the program
where the variable can be referenced. The scope of a local variable starts from its
declaration and continues to the end of the block that contains the variable. A local
variable must be declared before it can be used. A parameter is actually a local variable.
The scope of a method parameter covers the entire method.`,
                paragraph: ``,
                code: [],
                image: [],
              },
            ],
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
            content: [
              {
                heading: `At the end of the lesson you are expected to have;

>  Declared and initialize an array.
>  Used subscripts with an array.
>  Performed a search in an array.
>  Used arrays as argument of methods.
>  Declared and to manipulate multidimensional arrays.`,
                paragraph: `Introduction 

Often you will to store a large number of values during the execution of a program. Suppose, for instance, that you will to read 50 numbers, compute their average, and find out how many numbers are above the average. Your program first reads the number and compute their average, then compares each number with the average to determine whether it is above the average. In order to accomplish this task, the number must all be stored in variables. You have to declare 50 variables and repeatedly write all almost identical code 50 times. Writing a program this way would be impractical. So, how do you solve this problem?
Java and most other high-level languages provide a data structure called array, it is a named list of data items that all have the same type with fixed-size. In the present case, you can store all 50 numbers into an array and access them through a single array variable. The solution look like this:`,
                code: [],
                image: [],
              },
              {
                heading: ``,
                paragraph: ``,
                code: [
                  {
                    language: "java",
                    textCode: `
public class AnalyzeNumbers{
  public static void main(String[] args){
    int NUMBER_OF_ELEMENTS = 50;
    //decare Array
    double[] numbers = new double[NUMBER_OF_ELEMETS];
    double sum = 0;
      java.util.Scanner input = new java.util.Scanner(System.in)
      for(int i = 0; i < NUMBER_OF_ELEMENTS; i++){
        System.out.print("enter a new number: ");
        numbers[i] = input.nextDouble();
        sum += numbers[i];
      }
    //Get average
    double average = sum / NUMBER_OF_ELEMENTS;
    int count = 0;
    for(int i = 0; i < NUMBER_OF_ELEMENTS; i++)
      //above average
      if(numbers[1] > average) count++;
    System.out.println("Average is " + average);
    System.out.println("Number of elements above the average  " + count);
  }
}`,
                  },
                ],
                image: [],
              },
            ],
          },
          {
            id: "6.1",
            introduction: "Declaring and Creating Arrays ",
            status: false,
            content: [
              {
                heading: `To use an array in a program, you must declare a variable to reference the array
and specify the array’s element type. The syntax for declaring an array variable;

Elementype[] arrayname;
                `,
                paragraph: `The elementtype can be any data type, and all elements in the array will have the
same type. For example, to declare an array of integers that hold student ID
number, you can write the following:

int[] idNum;
                `,
                code: [],
                image: [],
              },
              {
                heading: `After an array variable was created, it is still required to reserve a memory space,
unlike a declaration of a primitive data type variables that automatically reserves
a memory location after it is declared. For example, to reserve a 20 slots of
memory location that will hold 20 ID numbers using the previously declared
idNum can be achieve by the following:

idNum=new int[20];
                `,
                paragraph: `Java also supports declaring and reserving memory location slot in one
statement like the following:

int[] idNum=new int[20]
                `,
                code: [],
                image: [],
              },
              {
                heading: `The statement int[] idNum=new int[20]; reserves 20 memory location for 20 ID
number values. You can distinguish each idnumber from the others with a
subscript. A subscript is an integer contained within square brackets that
indicated one of an array’s variables, or elements.

To assign values to the elements, use the following syntax;

arrayname[index]=value; 
                `,
                paragraph: `For example, the following code initializes the array;

idNum[0]=1122;
idNum[1]=2233;
idNum[2]=3344;
idNum[3]=4455;
idNum[4]=5566;
idNum[5]=6677;
                `,
                code: [],
                image: [],
              },
              {
                heading: `The array is pictured in the figure below`,
                paragraph: `The first element in an array is element 0 and the last element’s subscript is one
less than the array size. For example the highest allowed subscript for 100 element array is 99. `,
                code: [],
                image: [require("./assets/m6p1.png")],
              },
              {
                heading: `You can also assign non default values to array elements upon creation. To
initialize an array, you use a list of values separated by commas and enclosed
within curly braces. For example, if you want to create an array named prime and
store the first six prime numbers, you can declare prime as follows:

int[] prime = {2, 3, 5, 7, 11, 13}; `,
                paragraph: `Notice the semicolon at the end of the statement. You don’t use a semicolon
following a method’s closing curly brace, but you do use one following the closing
brace of an array initialization list.
When the array is populated upon creation, the size is assigned based on the
number of values placed in the initializing list `,
                code: [],
                image: [],
              },
            ],
          },
          {
            id: "6.2",
            introduction: "Using subscripts with an array",
            status: false,
            content: [
              {
                heading: `Using subscripts with an array
When processing array elements, it common to use for loop due to the following
reasons:

● All of the elements in an array are of the same type. They are evenly
processed in same fashion repeatedly using a loop.
● The size of the array is known.
                `,
                paragraph: `Here are some examples of processing arrays:`,
                code: [
                  {
                    language: "java",
                    textCode: `
public class sumallelements{
  public static void main(String[] args){
  double total=0;
  double[] listofnumbers={2,4,6,8,10,12,14);

  for(int x = 0; x < listofnumbers.length;x++){
    total = total+listofnumbers[x];
  }

  System.out.print("The sum of all elements is " + total);
  }
}`,
                  },
                ],
                image: [],
              },
              {
                heading: `1. Summing all elements. Variable named total to store the sum. Initially
total is 0. Add each element in the array to total using a loop like this:
                `,
                paragraph: ``,
                code: [],
                image: [require("./assets/m6p2.jpg")],
              },
              {
                heading: `2. Merging two arrays. The array’s values and values2 are declared and
                initialized with values then the merge array is declared with the size of the
                sum of the length of the values and values2.
                `,
                paragraph: ``,
                code: [],
                image: [require("./assets/m6p3.jpg")],
              },
              {
                heading: `3. Find the maximum value. Initially max value is equal to 0.`,
                paragraph: ``,
                code: [],
                image: [require("./assets/m6p4.jpg")],
              },
            ],
          },
          {
            id: "6.3",
            introduction: "Passing arrays to a method",
            status: false,
            content: [
              {
                heading: `Passing arrays to a method
The same as primitive type values to methods, arrays can also be passed to methods.
For example, the following method displays the elements in an int array:`,
                paragraph: `Java uses pass-by-value to pass arguments to a method. There are important differences between passing the values of variables of primitive data type and passing arrays.
● For an argument of a primitive type, the argument’s value is passed.
● For an arguments of an array type, the values of the argument is a reference to an array; this reference value is passed to the method. The example below illustrates the difference.`,
                code: [
                  {
                    language: "java",
                    textCode: `
public static void printArray(int[] arr){
  for(int i = 0; i< arr.length;i++){
    System.out.print(arr[i] + " ");
  }
}`,
                  },
                ],
                image: [],
              },
              {
                heading: ``,
                paragraph: `Output:
                As shown in the example above f is invoked, the value x remains 1 while but the value of a[0] is 456. Although a and arr are independent variables, they are reference to the same array.`,
                code: [],
                image: [require("./assets/m6p5.jpg")],
              },
              {
                heading: `
Returning an Array from a Method

A method may return an array. For example, the method shown below returns an array that contains two values, the sum and subtraction result of the two numbers passed in the method.`,
                paragraph: ``,
                code: [],
                image: [require("./assets/m6p6.jpg")],
              },
            ],
          },
         
          {
            id: "6.4",
            introduction: "Returning an Array from a Method",
            status: false,
            content: [
              {
                heading: `The preceding section introduced how to use one-dimensional arrays to store linear collection of elements. You can use two-dimensional array to store a matrix or a table.

The syntax for declaring a two-dimensional array:
elementType[][] arrayname;

Or

elementType arrayname[][];`,
                paragraph: `As an example, here is how you would declare a two-dimensional array variable matrix of int values:

int[][] matrix;

Or

int matrix[][];`,
                code: [],
                image: [],
              },
              {
                heading: `You can create a two-dimensional array of 10-by-10 int values and assign it to matrix using this syntax:
matrix=new int[10][10];
The two subscripts are used in a two-dimensional array, one for the row and the other for the column. As in one-dimensional array, the index for each subscript is of the int type ans starts from 0.`,
                paragraph: `The statement matrix[0][1]=10;

will assign number 10 to matrix row 1 column 2;

Two-dimensional array can also be declared and initialized in one statement as show in example below.

int [][] arr={{1,2,3},{4,5,6},{7,8,9}};`,
                code: [],
                image: [],
              },
              {
                heading: `
The example above is equivalent to
int[][] arr;
arr=new int[3][3];
arr[0][0]=1;
arr[0][1]=2;
arr[0][2]=3;
arr[1][0]=4;
arr[1][1]=5;
arr[1][2]=6;
arr[2][0]=7;
arr[2][1]=8;
arr[2][2]=9;`,
                paragraph: `A two-dimensional array is an array in which each element is a one-dimensional array. The length of an array x is the number of elements in the array, which can be obtained using x.length, x[0],x[1],x[2]...are arrays. Their length can be obtained using x[0].length.

Java also support declaring ragged array, this type of two-dimensional array composed of elements of not the same type. For example, the statement below declare and initialize a ragged array.`,
                code: [],
                image: [],
              },
              {
                heading: `double[][] raggedarr={{1,2,3,4,5,6},
{7,8,9,10},
{11,12,13},
{14,15}
{16}};
Example below shows how to process two-dimensional array.`,
                paragraph: ``,
                code: [],
                image: [require("./assets/m6p7.jpg")],
              },
            ],
          },
        ],
      },
    ],
  },
];
