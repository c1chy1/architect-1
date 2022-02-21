<template>
  <div class="bg-white">
    <div class="mx-auto mt-20 py-12 lg:py-24 border-t border-[gray] border-opacity-20">
      <div class="space-y-12">
        <ul role="list" class="space-y-12 divide-y divide-y-reverse divide-[gray] divide-opacity-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 xl:gap-x-28 lg:space-y-0">
          <li v-for="person in people" :key="person.name" class="border-b border-[gray] border-opacity-20" >
            <div class="w-full px-2 my-16 space-y-4 sm:space-y-0 flex gap-1 sm:gap-3 lg:gap-4 xl:gap-5"  >
              <div class=" w-full ">
                <img class="object-cover shadow-lg " :src="person.imageUrl" alt="" />
              </div>
              <div class="w-full px-2 flex flex-col justify-center">
                <div class="space-y-4  text-left">
                  <div class="text-lg leading-6 font-medium space-y-1 ">
                    <h3 >{{ person.name }}</h3>
                    <p class="text-fourth text-opacity-50 py-2">{{ person.role }}</p>
                  </div>
                  <div class="text-sm">
                    <p class="text-gray-500">{{ person.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: 'Eberhard Müller',
    role: 'Founder/Partner',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },


  {
    name: 'Fabienne Meyer',
    role: 'Rezeptionistin',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },


  {
    name: 'Fabian Schneider',
    role: 'Founder/Partner',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },




  {
    name: 'Nicola Weber',
    role: 'Mitarbeiter',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },



  {
    name: 'Luka Schmidt',
    role: 'Mitarbeiter',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras.',
  },



  {
    name: 'Nikita Hofmann',
    role: 'Mitarbeiter',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },



  {
    name: 'Hinrich Wagner',
    role: 'Mitarbeiter',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu.',
  },



  {
    name: 'Hans Bauer',
    role: 'Mitarbeiter',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },





  {
    name: 'Marie Jung',
    role: 'Mitarbeiter',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.Eget turpis urna maecenas cras.. Eget turpis urna maecenas cras.',
  },


]

export default {
  setup() {
    return {
      people,
    }
  },
}
</script>
<style scoped>

#workers:nth-child(1) {

  border: 1px solid red;

}

</style>

