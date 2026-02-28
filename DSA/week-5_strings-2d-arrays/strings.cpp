#include <bits/stdc++.h>
using namespace std;

int main() {
  // whether 2 characters r equal or not
  /* char ch1, ch2;
  cin>>ch1>>ch2;

  if(ch1==ch2){
    cout<<"YES";
  }else{
    cout<<"NO";
  } */

  // printing range of characters via ASCII value
  /* char ch;
  cin>>ch;
  if(ch>='a' and ch<='b'){
    cout<<"lower";
  }else if(ch>='A' and ch<='Z'){
    cout<<"upper";
  }else if(ch>='0' and ch<='9'){
    cout<<"digit";
  }else{
    cout<<"special";
  }
  cout<<(int)ch; //moder c++ way "static_cast<int>(ch)"
  cout<<(char)64; */

  // latter conversion A->a
  /* char ch;
  cin >> ch;
  if (ch >= 'A' && ch <= 'Z') {
    // ch += 32; (2)
    cout<<char(32+ch); // (3)
  }
  // cout << ch; (1) */

  // string
  // c/manual style, had to memory handling, ends wih '\0', more error-prone
  char s[5];
  for (int i = 0; i < 5; i++) {
    cin >> s[i];
  }
  cout << s[4];
  
  // standard way via STL, automatic memory management, less error-prone, inbuilt functions available
  string name;
  cin >> name;
  cout << name;

  return 0;
}