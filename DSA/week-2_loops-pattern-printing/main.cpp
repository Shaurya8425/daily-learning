#include <bits/stdc++.h>
using namespace std;

int reverseStore(int num);
int pallindrome(int num);
void solidRectangle(int n, int m);
void invertedPyramid(int n);
void hollowSquare(int n);
void numberRectangle(int n, int m);
void alphabetRectangle(int n, int m);
void numberedPyramid(int n);
void binaryPyramid(int n);

int main() {
    pallindrome(121);

    cout << endl;
    solidRectangle(5, 7);

    cout << endl;
    invertedPyramid(5);

    cout << endl;
    hollowSquare(5);

    cout << endl;
    numberRectangle(4, 5);

    cout << endl;
    alphabetRectangle(4, 5);

    cout << endl;
    numberedPyramid(5);

    cout << endl;
    binaryPyramid(5);
}
