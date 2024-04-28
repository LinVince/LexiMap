import json
import math
import random

def assign_coor(coordinate):
    # Generate random distance and angle
    distance = random.uniform(0, 1)
    angle = random.uniform(0, 2 * math.pi)

    # Calculate x, y coordinates relative to the original coordinate
    x = coordinate[0] + distance * math.cos(angle)
    y = coordinate[1] + distance * math.sin(angle)

    # Return new coordinates
    return (x, y)

# Open the input file in read mode
input_file = open('./vocab.json', 'r')
data = json.load(input_file)

# Initialize variables
check_text = set()  # Use a set for faster checks
check_coor = set()
result = []
pk = 1

# Process data
for i in data:
    if i['fields']['text'] not in check_text:
        # Update the primary key
        to_add = i
        to_add['pk'] = pk

        # Check for duplicate coordinates
        original_coordinate = (i['fields']['longitude'], i['fields']['latitude'])
        if original_coordinate in check_coor:
            # Generate new coordinates
            new_coordinate = assign_coor(original_coordinate)
            to_add['fields']['longitude'], to_add['fields']['latitude'] = new_coordinate
        else:
            new_coordinate = original_coordinate

        # Add record to the result list and update check lists
        result.append(to_add)
        pk += 1
        check_text.add(to_add['fields']['text'])
        check_coor.add(new_coordinate)

# Close the input file
input_file.close()

# Open the output file in write mode
output_file = open('vocab_output.json', 'w')

# Write the result list as JSON to the output file
json.dump(result, output_file, indent=4)

# Close the output file
output_file.close()
