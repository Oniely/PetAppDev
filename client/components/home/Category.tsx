import { View, Text } from 'react-native'
import CategoryItem from './CategoryItem'

const Category = () => {
   return (
     <View className='flex-1'>
        <View className='flex-row items-center justify-between'>
          <Text style={{ fontFamily: "Poppins_500Medium" }} className='text-base text-dark-gray'>Category</Text>
          <Text style={{ fontFamily: "Poppins_400Regular" }} className='text-sm text-gray-500 underline'>See All</Text>
        </View>
        <View className='flex-row justify-between'>
          <CategoryItem title='Veterinary' imageUrl={require('@/assets/images/dogo_care.jpg')} />
          <CategoryItem title='Grooming' imageUrl={require('@/assets/images/dogo_care.jpg')} />
          <CategoryItem title='Onboarding' imageUrl={require('@/assets/images/dogo_care.jpg')} />
          <CategoryItem title='Training' imageUrl={require('@/assets/images/dogo_care.jpg')} />
        </View>
     </View>
   )
}

export default Category