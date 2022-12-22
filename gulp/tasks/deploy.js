import ghPages from "gulp-gh-pages";

export const gitHubPages = () => {
    return app.gulp.src(app.path.build.deploy)
        .pipe(ghPages());
}