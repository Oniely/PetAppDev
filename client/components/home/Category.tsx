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
          <CategoryItem title='Veterinary' imageUrl="https://static.vecteezy.com/system/resources/previews/005/661/991/non_2x/female-veterinarian-checking-up-the-dog-free-vector.jpg" />
          <CategoryItem title='Grooming' imageUrl="https://static.vecteezy.com/system/resources/previews/003/754/114/non_2x/woman-baths-a-dog-vector.jpg" />
          <CategoryItem title='Onboarding' imageUrl="https://thumbs.dreamstime.com/b/pet-services-abstract-concept-vector-illustration-sitting-boarding-animal-care-dog-walking-grooming-salon-daycare-attention-234176716.jpg" />
          <CategoryItem title='Training' imageUrl="https://static.vecteezy.com/system/resources/previews/024/402/535/non_2x/happy-owner-and-pet-concept-flat-cartoon-character-with-man-playing-with-his-dog-dog-training-animal-and-human-illustration-design-for-decoration-cover-website-poster-free-vector.jpg" />
        </View>
     </View>
   )
}

export default Category