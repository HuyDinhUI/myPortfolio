import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowRight,
  faCode,
  faPaintBrush,
  faTools,
  faPaperPlane,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export const Home = () => {
  return (
    <div className="">
      {/************* HOME ***************/}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-16"
      >
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
              Chào, Tôi Là{" "}
              <span className="text-blue-200 gradient-text">Huy</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
              <span id="typed-text" className="font-medium">
                Web Developer
              </span>
              <span className="cursor-blink"> |</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              Tôi là người tạo ra những trang web hiện đại, tập trung vào trải nghiệm người dùng
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-medium rounded-lg hover:opacity-90 transition"
              >
                Liên Hệ
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800 transition"
              >
                Xem Dự Án
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute animate-pulse inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 blur-2xl"></div>
              <div 
              style={{backgroundSize:"cover",backgroundImage:"url('https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/150063754_468860520957877_1890502979673873949_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=zirIh1ZpyusQ7kNvwGdcvW2&_nc_oc=Adnp5fGW-hpXzugYqppzGfSpqxrXOepQOiuA_R95ZfppvKNdyft33iyrPZCPMwNkDFieykgaY1Z1aezkssaxjLEv&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=Ox2Ra3vjPz9Us4lRIcwg9A&oh=00_AfJ4hF57aNk5xE3dseRuAUef9F_rw8Mz2SIZPP-MQeD-sQ&oe=68628543')"}} 
              className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2  animate-bounce">
            <a href="#about" className="text-slate-400 hover:text-white">
              <FontAwesomeIcon
                className="text-2xl"
                icon={faChevronDown}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </section>

      {/************** ABOUT ************/}

      <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
              Thông Tin <span className="gradient-text">Cá Nhân</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute animate-pulse inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg opacity-20 blur-xl -rotate-6"></div>
                <div className="relative bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-700 rounded"></div>
                    <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-10">
              <h3 className="text-2xl text-white font-semibold mb-4">
                Tôi Là Ai
              </h3>
              <p className="text-slate-400 mb-4">
                Tôi là một sinh viên đang được đào tạo chuyên ngành An Toàn Thông Tin tại Trường Đại Học Công Thương Thành Phố Hồ Chí Minh.
                Với niềm đam mê với những trang web đẹp mắt và thân thiện, tôi đã tự tìm tòi và học hỏi và đã cho ra những dự án cá nhân thể hiện được kỹ năng của mình.                
              </p>
              <p className="text-slate-400 mb-6">
                Những dự án của tôi được tạo ra bằng những công nghệ mới kết hợp với kỹ thuật chuyên môn để xây dựng các giải pháp vừa đẹp, hữu ích và an toàn. Hướng đến "Clean Code",
                thiết kết trực quan và tạo ra những trải nghiệm làm hài lòng người dùng.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium text-white">Họ Tên:</h4>
                  <p className="text-slate-400">Đinh Văn Huy</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Email:</h4>
                  <p className="text-slate-400">huydinh28032004@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Địa Chỉ:</h4>
                  <p className="text-slate-400">Hồ Chi Minh, Việt Nam</p>
                </div>

              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/************** SKILL **************/}

      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
              Kỹ Năng <span className="gradient-text">Chuyên Môn</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-xl mx-auto">
              Tôi đã tìm tòi và học hỏi được nhiều các công nghệ và công cụ khác nhau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl text-white font-semibold mb-6 flex items-center">
                <FontAwesomeIcon className="text-blue-400 mr-3" icon={faCode} />
                Kỹ Năng Lập Trình
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">HTML &amp; CSS</span>
                    <span className="text-slate-400">95%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">JavaScript</span>
                    <span className="text-slate-400">90%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">React</span>
                    <span className="text-slate-400">85%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Node.js</span>
                    <span className="text-slate-400">80%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Python</span>
                    <span className="text-slate-400">75%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold mb-6 flex items-center">
                <FontAwesomeIcon
                  className="text-blue-400 mr-3"
                  icon={faPaintBrush}
                />
                Kỹ Năng Thiết Kế
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">UI/UX Design</span>
                    <span className="text-slate-400">90%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Figma</span>
                    <span className="text-slate-400">95%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Adobe XD</span>
                    <span className="text-slate-400">85%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Photoshop</span>
                    <span className="text-slate-400">80%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Illustrator</span>
                    <span className="text-slate-400">75%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl text-white font-semibold mb-6 flex items-center">
              <FontAwesomeIcon className="text-blue-400 mr-3" icon={faTools} />
              Công Cụ &amp; Công Nghệ Khác
            </h3>

            <div className="flex flex-wrap gap-3">
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                Git
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                VS Code
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                Webpack
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                Sass
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                Tailwind CSS
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                Bootstrap
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                Redux
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                GraphQL
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                MongoDB
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                PostgreSQL
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                Docker
              </span>
              <span className="skill-pill px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-400">
                AWS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/*********** PROJECTS ***********/}

      <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
              Dự Án <span className="gradient-text">Cá Nhân</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-xl mx-auto">
              Sau đây là một số dự án gần đây của tôi. Mỗi dự án đều được thiết kế cẩn thận, chú ý đến từng chi tiết và trải nghiệm của người dùng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-laptop-code text-5xl text-white opacity-50"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Project Name
                </h3>
                <p className="text-slate-400 mb-4">
                  A modern web application with responsive design and
                  interactive features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    HTML
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    CSS
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    JavaScript
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition flex items-center"
                  >
                    <span>Xem Chi Tiết</span>
                    <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-mobile-alt text-5xl text-white opacity-50"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  Mobile App UI
                </h3>
                <p className="text-slate-400 mb-4">
                  A sleek mobile application interface with intuitive navigation
                  and animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    UI/UX
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    Prototyping
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition flex items-center"
                  >
                    <span>Xem Chi Tiết</span>
                    <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-store text-5xl text-white opacity-50"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  E-commerce Platform
                </h3>
                <p className="text-slate-400 mb-4">
                  A complete e-commerce solution with product catalog and
                  checkout system.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                    MongoDB
                  </span>
                </div>
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition flex items-center"
                  >
                    <span>Xem Chi Tiết</span>
                    <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800 transition inline-flex items-center"
            >
              <span>Xem Tất Cả Dự Án</span>
              <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>

      

      {/*************** CONTACT ***************/}

      <section id="contact" class="py-20 bg-slate-800/50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl text-white md:text-4xl font-bold mb-4">
              Liên Hệ <span class="gradient-text">Làm Việc</span>
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
            <p class="text-slate-400 max-w-xl mx-auto">
              Bạn thấy tôi phù hợp với công ty? Hãy liên hệ với tôi.
            </p>
          </div>

          <div class="flex flex-col md:flex-row gap-10">
            <div class="md:w-1/2">
              <div class="bg-slate-900 p-8 rounded-xl border border-slate-800">
                <h3 class="text-xl text-white font-semibold mb-6">
                  Gửi Tin Nhắn
                </h3>

                <form id="contact-form" class="space-y-4">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-slate-400 mb-1"
                    >
                      Họ Tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      placeholder="Tên của bạn"
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-slate-400 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      placeholder="vidu@gmail.com"
                    />
                  </div>

                  <div>
                    <label
                      for="subject"
                      class="block text-sm font-medium text-slate-400 mb-1"
                    >
                      Tiêu Đề
                    </label>
                    <input
                      type="text"
                      id="subject"
                      class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      placeholder="Tiêu đề"
                    />
                  </div>

                  <div>
                    <label
                      for="message"
                      class="block text-sm font-medium text-slate-400 mb-1"
                    >
                      Nội Dung
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white resize-none"
                      placeholder="Nội dung..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    class="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center"
                  >
                    <span>Gửi Tin Nhắn</span>
                    <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
                  </button>
                </form>
              </div>
            </div>

            <div class="md:w-1/2">
              <div class="bg-slate-900 p-8 rounded-xl border border-slate-800 mb-8">
                <h3 class="text-xl text-white font-semibold mb-6">
                  Thông Tin Liên Hệ
                </h3>

                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center mr-4">
                      <FontAwesomeIcon
                        className="text-blue-400"
                        icon={faMapMarkerAlt}
                      />
                    </div>
                    <div>
                      <h4 class="font-medium text-white">Dịa Chỉ</h4>
                      <p class="text-slate-400">Hồ Chí Minh, Việt Nam</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center mr-4">
                      <FontAwesomeIcon
                        className="text-blue-400"
                        icon={faEnvelope}
                      />
                    </div>
                    <div>
                      <h4 class="font-medium text-white">Email</h4>
                      <p class="text-slate-400">huydinh28032004@gmail.com</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center mr-4">
                      <FontAwesomeIcon
                        className="text-blue-400"
                        icon={faPhoneAlt}
                      />
                    </div>
                    <div>
                      <h4 class="font-medium text-white">Điện Thoại</h4>
                      <p class="text-slate-400">+84 354382607</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-slate-900 p-8 rounded-xl border border-slate-800">
                <h3 class="text-xl text-white font-semibold mb-6">Xem Thêm Tại</h3>

                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gray-800 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
