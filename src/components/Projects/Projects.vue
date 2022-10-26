<script lang="ts">
import { colors } from "../../colors";

type Technology = {
  name: string;
  color: string;
  url?: string;
};

const technologies: { [key: string]: Technology } = {
  Svelte: {
    name: "SvelteKit",
    color: colors.red,
    url: "https://kit.svelte.dev/",
  },
  React: {
    name: "React",
    color: colors.blue,
    url: "https://reactjs.org/",
  },
  Angular: {
    name: "Angular",
    color: colors.red,
    url: "https://angular.io/",
  },
  ASPNET: {
    name: "ASP.NET",
    color: colors.purple,
    url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
  },
  Auth0: {
    name: "Auth0",
    color: colors.blue,
    url: "https://auth0.com/",
  },
  MongoDB: {
    name: "MongoDB",
    color: colors.green,
    url: "https://www.mongodb.com/",
  },
};

const projects: {
  name: string;
  description: string;
  url: string;
  technologies: Technology[];
}[] = [
  {
    name: "Bible App",
    description:
      "This is an app where you can read and listen to the bible search for verses and terms, mark verses. You can also download all the content to enjoy the bible offline.",
    url: "https://bible-dev.eduardbeke.com/",
    technologies: [
      technologies.Svelte,
      technologies.Auth0,
      technologies.MongoDB,
    ],
  },
];

export default {
  data() {
    return {
      projects,
    };
  },
};
</script>

<template>
  <div v-for="project in projects" class="project">
    <div class="iframeWrapper">
      <iframe src="https://bible-dev.eduardbeke.com/" frameborder="0"></iframe>
    </div>
    <div class="projectInfo">
      <p class="projectTitle">{{ project.name }}</p>
      <p class="projectDescription">{{ project.description }}</p>
      <p class="usedTechnologiesTitle">Used Technologies & Tools:</p>
      <div class="technologies">
        <a
          class="technologyTag"
          v-for="technology in project.technologies"
          :href="technology.url"
          :style="{ backgroundColor: technology.color }"
        >
          {{ technology.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/styles";

.project {
  display: flex;
  background-color: $gray50;
  border-radius: 20px;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
}

.projectTitle {
  @include textMdMedium();
}

.projectInfo {
  padding: 20px;
}

.projectDescription {
  @include text();
  color: $gray;
}
.usedTechnologiesTitle {
  padding-top: 30px;
  padding-bottom: 10px;
  @include textSmNormal();
}
.technologies {
  display: flex;
  gap: 10px;
}
.technologyTag {
  @include text();
  color: #fff;
  width: fit-content;
  padding: 1px 8px;
  border-radius: 6px;
}
.iframeWrapper {
  min-width: 500px;
  width: 500px;
  min-height: 300px;
  height: 300px;
  padding: 0;
  overflow: hidden;
  border-radius: 20px 0 0 20px;

  @media (max-width: 1300px) {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
}

iframe {
  width: 500px;
  height: 600px;

  @media (max-width: 1300px) {
    width: 100%;
  }
}
</style>
