class restaurantManager{
    restaurantList =[
        {
            id: 1,
            name: 'Anna Idli',
            address: 'Gandhichok',
            city: 'Mumbai'
        },
        {
            id: 2,
            name: 'Shanti sagar',
            address: 'shivaji circle',
            city: 'Delhi'
        },
        {
            id: 3,
            name: 'Li grand',
            address: 'Chandni chock',
            city: 'Delhi'
        }
    ]
    printAllRestaurantName = () => {
        this.restaurantList.map(restaurant => console.log(restaurant.name))
    }

    filterRestaurantByCity = (city) => {
        const res = this.restaurantList.filter(restaurant => restaurant.city === city)
        console.log(res)
    }
}

 const restaurantOne = new restaurantManager()
 restaurantOne.printAllRestaurantName()
 restaurantOne.filterRestaurantByCity('Delhi')

 const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 78
 };
 const totalOrders = Object.values(orderData).reduce((prev, curr) => prev + curr)

 const orderPortions = Object.keys(orderData).length

 console.log(totalOrders)
 console.log(orderPortions)

const finalData = []

const percentageOfPortion = Object.keys(orderData).map((portion, idx) => {
    finalData.push({
        id: idx + 1,
        order: portion,
        'order percentage': ((orderData[portion] / totalOrders) * 100).toFixed(2),
        restaurant: "Punjabi Tadka"

    })
})
console.log(finalData)