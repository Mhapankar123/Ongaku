def main(n):
    for i in range(1,n):
        for j in range(n,i+1):
            print(i,end=" ")
        print("\r")
main(5)
