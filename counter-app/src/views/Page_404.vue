<template>
    <div>
        <div id = "navigation">
       
        <RouterLink to="/404_page">404 page</RouterLink>
        <RouterLink to="/counter">Home</RouterLink>
        </div>
        <h1>404 page</h1>
        <p>This is the 404 page redirect back to counter app by clicking this button below.</p>
        <RouterLink to="/counter">Home</RouterLink>
    </div>
</template>