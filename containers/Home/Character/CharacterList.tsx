import { ICharacter } from 'interface/character'
import CharacterListItem from './CharacterListItem'
import { Card, Flex, Grid } from 'antd'
import Meta from 'antd/es/card/Meta'

interface IProps {
  data: ICharacter[]
}

const CharacterList: React.FC<IProps> = ({ data }) => {
  console.log('data', data)
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }, (_, i) => (
          <Card
            key={i}
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        ))}
      </div>
      {/* <div className="w-[80%]">Hello World</div>
      <div className=" grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
        <div className="relative">
          <div className="absolute -inset-1">
            <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
          </div>
          <div className="relative overflow-hidden bg-white z-10 shadow-md rounded-xl h-full">
            <div className="p-9">
              <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Realtime Collaboration
              </h3>
              <p className="mt-6 text-base text-gray-600">
                Collaborate in realtime with other editors in a project. See
                what othe editors are doing and edit even a simple text together
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white shadow-md rounded-xl">
          <div className="p-9">
            <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
              History of Edits
            </h3>
            <p className="mt-6 text-base text-gray-600">
              Go back and forth your history of changes and restore your designs
              to any point in time
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-1">
            <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
          </div>
          <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
            <div className="p-9">
              <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Integrations
              </h3>
              <p className="mt-6 text-base text-gray-600">
                Step up your designs and workflow with integrations with your
                favourite tools such as mailchimp, slack, jira etc
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white shadow-md rounded-xl">
          <div className="p-9">
            <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
              Publish webpage online
            </h3>
            <p className="mt-6 text-base text-gray-600">
              Effortlessly publish your webpages online and make it available to
              the world with a click of a button
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-1">
            <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
          </div>
          <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
            <div className="p-9">
              <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Forms and Data Collection
              </h3>
              <p className="mt-6 text-base text-gray-600">
                Collect data and information from users with forms built on
                windframe and sort through them in a nice interface
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white shadow-md rounded-xl">
          <div className="p-9">
            <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
              Custom Domains
            </h3>
            <p className="mt-6 text-base text-gray-600">
              Attach your own custom domain to your published projects or
              website on windframe
            </p>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default CharacterList
