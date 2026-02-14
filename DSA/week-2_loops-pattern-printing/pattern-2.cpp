#include <bits/stdc++.h>
using namespace std;

void planeTriangle(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
}

void hollowPlaneTriangle(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            if (j == 1 || i == j)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            if (j == 1 || j == n - i)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
}

void pyramidRightAligned(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (j > n - i)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
}

void triangle(int n) {
    for (int i = 1; i <= n; i++) {
        // leading space
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
}

void hollowTriangle(int n) {
    for (int i = 1; i <= n; i++) {
        // leading spaces
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // star with spaces
        for (int j = 1; j <= i; j++) {
            if (j == i || i == n || j == 1)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
}

void invertedHollowTraingle(int n) {
    for (int i = 1; i <= n; i++) {
        // leading spaces
        for (int j = 1; j <= i - 1; j++) {
            cout << " ";
        }
        // star with spaces
        for (int j = 1; j <= n - i + 1; j++) {
            if (j == 1 || j == n - i + 1 || i == 1)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
}

void diamond(int n) {
    for (int i = 1; i <= n; i++) {
        // leading spaces
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // star-space
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    for (int i = 1; i < n; i++) {
        // leading spaces
        for (int j = 1; j <= i; j++) {
            cout << " ";
        }
        // star-space
        for (int j = 1; j <= n - i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
}

void hollowDiamond(int n) {
    for (int i = 1; i <= n; i++) {
        // leading spaces
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // star-space
        for (int j = 1; j <= i; j++) {
            if (j == 1 || j == i)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
    for (int i = 1; i < n; i++) {
        // leading spaces
        for (int j = 1; j <= i; j++) {
            cout << " ";
        }
        // star-space
        for (int j = 1; j <= n - i; j++) {
            if (j == 1 || j == n - i + 1)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
}

void crown(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        for (int j = 1; j <= 2 * (n - i); j++) {
            cout << "  ";
        }
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
}

void butterfly(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        for (int j = 1; j <= 2 * (n - i); j++) {
            cout << "  ";
        }
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
            cout << "* ";
        }
        for (int j = 1; j <= 2 * i; j++) {
            cout << "  ";
        }
        for (int j = 1; j <= n - i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
}

void invertedDiamond(int n) {
    for (int i = 1; i <= n; i++) {
        // leading stars
        for (int j = 1; j <= n - i + 1; j++) {
            cout << "* ";
        }
        // middle spaces
        for (int j = 0; j < 2 * (i - 1); j++) {
            cout << "  ";
        }
        // trailing stars
        for (int j = 1; j <= n - i + 1; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    for (int i = 2; i <= n; i++) {
        // leading stars
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        // middle spaces
        for (int j = 0; j <= 2 * (n - i) - 1; j++) {
            cout << "  ";
        }
        // trailing stars
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
}

int main() {
    // cout<<"Hello World";

    int n = 5;
    // plane Triangle
    cout << "Plane Triangle" << endl;
    planeTriangle(n);

    // hollow plane Triangle
    cout << "Hollow Plane Triangle" << endl;
    hollowPlaneTriangle(n);

    // pyramid right angled
    cout << "Pyramid Right Angled" << endl;
    pyramidRightAligned(n);

    // solid tringle
    cout << "Triangle" << endl;
    triangle(n);

    // hollow Triangle
    cout << "Hollow Triangle" << endl;
    hollowTriangle(n);

    // inverted hollow traingle
    cout << "Inverted Hollow Traingle" << endl;
    invertedHollowTraingle(n);

    // diamond
    cout << "Diamond" << endl;
    diamond(n);

    // hollow diamond
    cout << "Hollow Diamond" << endl;
    hollowDiamond(n);

    // crown
    cout << "Crown" << endl;
    crown(n);

    // butterfly
    cout << "Butterfly" << endl;
    butterfly(n);

    // inverted diamond
    cout << "Inverted Diamond" << endl;
    invertedDiamond(n);

    return 0;
}
