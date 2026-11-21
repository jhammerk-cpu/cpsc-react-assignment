# Usability Evaluation

## A. Heuristic Evaluation
| # | Where                    | Heuristic | Problem |      |Severity | Proposed fix |
|1|Favorite Button in User List|Consistency|Not saving data   |3|     |Removal of arbitrary feature|
|2| Search bar                 |Aesthetic| |Rather small|     |2|      |Enlarging it especially for smaller devices|
|3| PostList    |             |Documentation| confusing|      |1|     |Adding user who posted|
|4| Postlist|                  |Aetsthetic| |no seperation|   |1|     |Adding border per list item|
|5| App itself|                |Status|     |status showing|  |0|      |works as normal with 404 route and error presentaion| 

## B. Accessibility Audit
### Checklist results
| WCAG item | Pass / Fail / N/A | How I checked |
|1.1.1|fail| no alt text appears when hovering| 
|1.4.10|pass|horizontal scrolling avoided when window shrinked|
|1.3.5|fail|no autocomplete attribute when tested|
|1.4.3|n/a| no defined text size in css|
|2.3.2|pass|checked for flashes through navigation|
|2.3.3|n/a|no essential or non essential animations|
|2.4.2|fail|checked tab, titled "React App"|
|2.4.3|pass| checked links to determine if each is condusive to every functionaility|
|3.1.1|pass| verified leng = "en" attribute was present in index.html|
|3.2.1|pass| checked for abrupt changes|
|3.2.3|pass|checked order of nav links|
|4.1.1| n/a| obsulete|
|4.1.2|fail| checked for attributes|
|4.1.3|pass| checked for status messages



### Automated tool
(Tool, routes tested, summary, what it could not tell me)
I used lighthouse to test the main route and the posts route.
Both reports told me that it takes around 15 seconds for the first content to appear on both pages. Both reports got a little over a 90 for accesibility with the main gripe being that <ul> is used.

The main thing that it can't tell me is how user friendly the pages are. That would be determined by usability test.

### Keyboard test
I was able to preform the main task with just the Tab, Alt, Space, and Enter keys. I got stuck with the bookmarks bar above the site with it seeingly being in an infinite loop, pressing tab not going back to the main page. However, I think that was just user error.

## C. Usability Test
### Task scenarios
1. Favorite three users, then search for them in the search bar.
2. Access the posts page.
3. Unfavorite two users.

### Results
| Participant | Task | Success? | What happened / what they said |
|1|Favorite three users, then search for them|Yes|n/a|
|1|Access the posts page.|Yes|n/a
|1|Unfavorite two users.|Yes|Overall par. 1 said it was self explanitory had to show #1 where nav bar was|
|2| Favorite three users, then search for them in the search bar.| Success
|2|Access the posts page.|success|
|2|Unfavorite two users.|success| Didnt need any extra instruction, completed each task.
|3|Favorite three users, then search for them in the search bar.|success|completed without instruction
|3|Access the posts page.|success|completed without instruction
|3|Unfavorite two users.|success|completed without instruction

### Summary of problems
| Problem | Participants affected | Severity |
|Navigation bar being less clear|1|3|

## D. Revisions
| Problem | Severity | What I changed | Commit |
|Navigation bar being less clear|3|enlarged text and border|21eb472a5c3e3937aecd38e662bac795dd875f83|
|search bar too small|aligned content to center and increased its size| 

Problems I chose not to fix, and why: