# BEST Course Country Categories (Spring18 - Spring22)
This is a short little Node program that aggregates all the **BEST Course** country categories from `Spring18` - `Spring22`.  
The goal here was to do so with as little room for human error as possible.  
The aggregated result is outputed in [out.csv](out/out.csv) which can in turn be imported into any spreadsheet program.

---

## Process
To achieve the goal of avoiding any source of human error I decided not to in any way copy or modify the data by hand.

### Step 1: getting the data
I got the data files containing all the country categories of each season from the archive on `PA`.  
I opened each of the `.xlsx` files in `Google Sheets` and downloaded each season's respective `Fee Calculator sheet` as a `.csv` file.  
The reason for choosing the Fee Calculator Sheet is because it left most of the other unneccessary stuff left out making it easier to work with.
The resulting `.csv` file will have a title as follows: `filename` - `sheetname` `.csv`  
An example is: [Country categories for Summer18 and Autumn18 (Fee calculator included).xlsx - Autumn18 - Fee Calculator.csv](data/Country%20categories%20for%20Summer18%20and%20Autumn18%20(Fee%20calculator%20included).xlsx%20-%20Autumn18%20-%20Fee%20Calculator.csv)  

### Step 2: linking datafile to season
When you want to fetch the data from a specific season you need to know which datfile to read from.
I wanted to avoid renaming the files by hand in case I don't pay attention and accidentally renamed it something incorrect.  
I also wanted to avoid hardcoding in which file belonged to which season for the same reason. Anything you do by hand you can screw up.  
So instead what I did was:
1. Generate a list of seasons progammatically (again, not by hand besides telling it to start at `Spring18` and end at `Spring22`)
2. Programmatically search through all the datafile names and match each season to a file that contained that season in its name.
   - Of course every datafile has at least 2 seasons in the title. This is solved by looking at the end of the filename at the sheetname which does hold the correct season.
   - Some sheetnames don't contain a season but those files correspond to every season in the filename
   - I handle everything programmatically and even check that each season only matches up with 1 file
3. Make sure that `Winter20` and `Winter21` aren't taken into account because they are both canceled.

In the end I did verify by eye that each season is mapped to the correct datafile.

### Step 3: reading in the data
Reading in the data is pretty straightforward.  
I used an npm package that parses `.csv`'s and used it to read in the first 2 columns of each datafile (country, category)  
Then I made sure to skip any irrelevant rows aka rows that contain the words "LBG", "Observer", "Fee Calculator" or have empty cells.  
I also renamed all instances of `FYR Macedonia` to `North Macedonia`.

### Step 4: Structuring the data
There is not much to say here. Once the data has been read in I just add it all together to form the final output.  

---

## Final thoughts

In the end everything gets output to a `.csv` file which can be imported into any spreadsheet program.  
This can then be compared by eye with the data in the draft spreadsheet.  
I would also compare this programmatically but I am sadly unable to download the draft data to compare.  
Comparing by eye seems like a waste of all the effort to avoid human error though.
