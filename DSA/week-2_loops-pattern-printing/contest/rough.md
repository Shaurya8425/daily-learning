<!-- counting numbers -->

#include<vector>

int num;
cin >> num;

vector<int> arr(num);
for (int i = 0; i <= num; i++)
{
cin >> arr[i];
}
int p=0,n=0,e=0,o=0;
for(int j=0;j<=num;j++){
if(arr[j]<0)
n++;
else if (arr[j]>0)
p++;
else if (arr[j]%2==0)
e++;
else
o++;
}
cout<<p<<"\n"<<n<<"\n"<<e<<"\n"<<o<<endl;

  <!-- sum of first n natural numbers -->

int n;
cin>>n;
int sum=0;
for(int i=1;i<=n;i++){
sum+=i;
}
cout<<sum;

  <!-- factorial -->

int factorial(int n)
{
int result = 1;
for (int i = 1; i <= n; i++)
{
result \*= i;
}
return result;
}

int n;
cin >> n;

cout << factorial(n);

<!-- reverse integer -->

long long int n;
cin>>n;
while(n!=0){
cout<<(n%10);
n/=10;
}
