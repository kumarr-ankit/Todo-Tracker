#include <stdio.h>

int partition(int arr[], int low, int high)
{

    int i = low;
    int j = high;
    int pivot = low;

    while (i <= high && arr[i] < arr[pivot])
        i++;
    while (j > low && arr[j] > arr[pivot])
        j--;

    if (i < j)
    {
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    // put pivot on its correct place
    int t = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = t;

    return j;
}
void quickSort(int arr[], int l, int h)
{
    int low = l;
    int high = h;

    if (low < high)
    {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}
void print(int arr[], int n)
{
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}
void BubbleSort(int arr[], int n)
{

    for (int i = 0; i < n - 1; i++)
    {

        for (int j = 0; j < n - 1 - i; j++)
        {

            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
void SelectionSort(int arr[], int n)
{

    for (int i = 0; i < n - 1; i++)
    {

        int pos = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[pos])
            {
                pos = j;
            }
        }

        if (pos != i)
        {
            int temp = arr[pos];
            arr[pos] = arr[i];
            arr[i] = temp;
        }
    }
}
void InsertionSort(int arr[], int n)
{

    for (int i = 1; i < n; i++)
    {

        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
int main()
{

    int arr[12] = {1, 2, 8, 0, 7, 8, 3, 2, 1, 8, 9, -8};
    print(arr, 12);
    printf("\n");
    printf("Bubble Sort..");
    BubbleSort(arr, 12);
    print(arr, 12);
    printf("\n");
    printf("Selection Sort..");
    SelectionSort(arr, 12);
    print(arr, 12);
    printf("\n");
    printf("Insertion Sort..");
    InsertionSort(arr, 12);
    print(arr, 12);
    printf("\n");
    printf("Quick Sort..");
    quickSort(arr,0,11);
    print(arr, 12);
    printf("\n");
}