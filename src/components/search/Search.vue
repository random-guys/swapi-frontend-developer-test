<template>
  <div class="search-component">
    <img src="https://res.cloudinary.com/store-manager/image/upload/v1569418363/logo.png" />
    <div class="content">
      <div class="centered logo">
        <img src="https://res.cloudinary.com/store-manager/image/upload/v1569418363/logo.png" />
        <div>Directory</div>
      </div>
      <div class="line"></div>
      <div class="description centered">
        <span>Find your favourite Characters, Films, Species, Starships and Planets</span>
      </div>
      <div class="search">
        <div class="search-content">
          <span class="icon">
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1569418365/search.png"
            />
          </span>
          <input type="text" placeholder="Enter a search term" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {};
  },
};
</script>
<style scoped>
.search-component {
  background-image: url("https://res.cloudinary.com/store-manager/image/upload/v1569418364/hero-banner.jpg");
  height: 30rem;
  width: 100%;
  padding: 1rem;
  position: relative;
}

.search-component img {
  widows: 2rem;
  height: 2rem;
}

.logo {
  margin-top: 4rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.centered h2 {
  margin-left: 1rem;
  color: #fff;
  font-weight: bold;
}

.centered div {
  font-size: 2.5rem;
  color: #fff;
  font-weight: bold;
  margin-left: 1rem;
}

.centered img {
  width: 7rem;
  height: 3.5rem;
}

.description {
  color: #fff;
  margin-top: 1rem;
  text-align: center;
}

.description span {
  width: 35rem;
  font-size: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(0, 0, 0);
}

.line {
  height: 0.2rem;
  background-color: #fff;
  width: 15rem;
  margin: 0 auto;
  margin-top: 1rem;
}

.search {
  margin-top: 2.5rem;
  text-align: center;
}

.search-content {
  position: relative;
}

.search input {
  height: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  width: 50rem;
  border-radius: 0.7rem;
  border: none;
  padding: 1rem 0 1rem 8rem;
  outline: none;
}

.icon {
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  position: relative;
  top: 0.5rem;
  left: 100px;
}

.title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 4rem;
}

.header-tag {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>
