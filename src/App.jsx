import './App.css'

// Internal
// Components
import FitnessCard from './components/Card';
import CardWrapper from './components/CardWrapper';
// Utilities
import data from './data/mockData.json';

function App() {

  const {
    name,
    description,
    discipline,
    duration,
    segments
  } = data;

  return (
    <main>
      <section>

        <FitnessCard
          variant='orange'
          name={name}
          discpline={discipline}
          duration={`${duration.value}${duration.unit}`}
          description={description}
        />

        {
          segments.map(segment => {

            const { blocks,title } = segment;

            return (
              <CardWrapper name={title}>
                {
                  blocks?.map(block => {

                    const { duration, intensity, note, render, blocks } = block;

                    // MAIN SET has array of objects with in the array -- map thru this
                    if(blocks) {
                      return (
                        blocks.map(block => {

                          const { duration, intensity, note, render } = block;

                          return (
                            <FitnessCard
                              variant='black'
                              name=''
                              duration={`${duration.value}${duration.unit}`}
                              intensity={intensity}
                              description={note}
                              render={render}
                            />
                          )
                        })
                      )
                    } else {
                      // Warm up & Cooldown has direct array of objects while
                      return (
                        <FitnessCard
                          variant='black'
                          name=''
                          duration={`${duration.value}${duration.unit}`}
                          intensity={intensity}
                          description={note}
                          render={render}
                        />
                      )
                    }
                  })
                }
              </CardWrapper>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
