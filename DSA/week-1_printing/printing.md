for(int i=1;i<=5;i++){
for(int j=i;j<=5;j++){
cout<<"\*";
}
cout<<endl;
}

for (int i = 1; i <= 5; i++) {
for (int j = 1; j <= 5; j++) {
if (i == 1 || i == 5 || j==(5-i)+1) {
cout << '\*';
}else{
cout<<' ';
}
}
cout << endl;
}

  <!-- 8/3/26 -->

long long l,b;
cin>>l>>b;
long long area=l*b;
long long perimeter=2*(l+b);
cout<<"Area = "<<area<<endl;
cout<<"Perimeter = "<<perimeter<<endl;

    for(int i=1;i<=10;i++){
    cout<<5<<" * "<<i<<" = "<<5*i<<endl;

}

  <!-- tried this approach but seems like i hit c++ limitations -->

int applyOp(char op, int a, int b){
if()
}

void calculator(int n, int m){
char arr[5]={'+','-','\*','/','%'};
for(int i=0;i<5;i++){
cout<<6<<" "<<arr[i]<<" "<<" = "<<
}
}

void calculator(long a, long b) {
cout << a << " + " << b << " = " << a + b << "\n\n";
cout << a << " - " << b << " = " << a - b << "\n\n";
cout << a << " _ " << b << " = " << 1LL _ a \* b << "\n\n";
cout << a << " / " << b << " = " << a / b << "\n\n";
cout << a << " % " << b << " = " << a % b << "\n\n";
}

int addLastDigits(long long n, long long m) {
int l1 = n % 10, l2 = m % 10;
return l1 + l2;
}

string evenOdd(int n) {
if (n % 2 == 0) {
return "Even";
}
return "Odd";
}

string factor(int n, int f) {
if (n % f == 0) {
return "Yes";
} else {
return "No";
}
}

string multiple(int n, int m) {
if (m % n == 0) {
return "Yes";
} else {
return "No";
}
}

string passFail(int n) {
if (n < 35) {
return "Fail";
} else {
return "Pass";
}
}

void maxMin(int n, int m) {
if (n > m) {
cout << "Min = " << m << "\n" << "Max = " << n;
} else {
cout << "Min = " << n << "\n" << "Max = " << m;
}
}

void maxMin(long long n1, long long n2, long long n3) {
if (n1 > n2 && n1 > n3) {
if (n2 > n3) {
cout << "Min = " << n3 << "\n" << "Max = " << n1;
} else {
cout << "Min = " << n2 << "\n" << "Max = " << n1;
}
}
if (n2 > n1 && n2 > n3) {
if (n1 > n3) {
cout << "Min = " << n3 << "\n" << "Max = " << n2;
} else {
cout << "Min = " << n1 << "\n" << "Max = " << n2;
}
}
if (n3 > n1 && n3 > n2) {
if (n1 > n2) {
cout << "Min = " << n2 << "\n" << "Max = " << n3;
} else {
cout << "Min = " << n1 << "\n" << "Max = " << n3;
}
}
}

string studentEval(int n) {
if (n > 90) {
return "Excellent";
} else if (n > 80 && n <= 90) {
return "Good";
} else if (n > 70 && n <= 80) {
return "Fair";
} else if (n > 60 && n <= 70) {
return "Meets Expectations";
} else {
return "Below Par";
}
}

string findLocation(int x, int y) {
if (x == 0 && y == 0) {
return "Origin";
} else if (x != 0 && y == 0) {
return "X axis";
} else if (x == 0 && y != 0) {
return "Y axis";
} else if (x > 0 && y > 0) {
return "1st Quadrant";
} else if (x < 0 && y > 0) {
return "2nd Quadrant";
} else if (x < 0 && y < 0) {
return "3rd Quadrant";
} else {
return "4th Quadrant";
}
}
