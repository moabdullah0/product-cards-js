import React from "react";
import { motion } from "framer-motion";
import useProfile from "../hooks/useProfile";

const ProfilePage = () => {
  const { profile: data, isLoading } = useProfile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            
            <motion.div
              className="relative px-6 py-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Profile image */}
              <motion.div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2"
                variants={itemVariants}
              >
                {data?.image ? (
                  <img
                    src={data.image}
                    alt={data?.firstName}
                    className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {data?.firstName?.[0] || data?.username?.[0] || "U"}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Profile info */}
              <motion.div className="text-center mt-16 mb-6" variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-800">
                  {data?.firstName && data?.lastName
                    ? `${data.firstName} ${data.lastName}`
                    : data?.username}
                </h2>
                <p className="text-gray-500">{data?.email}</p>
                {data?.company?.title && (
                  <p className="text-blue-600 font-medium mt-1">{data.company.title}</p>
                )}
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="flex justify-center space-x-6 mb-8"
                variants={itemVariants}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{data?.age || "--"}</p>
                  <p className="text-sm text-gray-500">Age</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{data?.height || "--"}</p>
                  <p className="text-sm text-gray-500">Height</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{data?.weight || "--"}</p>
                  <p className="text-sm text-gray-500">Weight</p>
                </div>
              </motion.div>

              {/* Details cards */}
              <motion.div className="space-y-4" variants={containerVariants}>
                <motion.div 
                  className="bg-gray-50 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="mt-1 text-gray-900">{data?.email}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-gray-50 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Username</p>
                      <p className="mt-1 text-gray-900">{data?.username}</p>
                    </div>
                  </div>
                </motion.div>

                {data?.phone && (
                  <motion.div 
                    className="bg-gray-50 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Phone</p>
                        <p className="mt-1 text-gray-900">{data?.phone}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Action button */}
              <motion.button
                className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Edit Profile
              </motion.button>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ProfilePage;